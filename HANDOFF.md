# Virdasia — Handoff Summary

Pre-launch, worldwide, anime/myth-inspired small-batch outerwear brand. Sole proprietor, Toronto.
Everything below verified live at time of writing.

---

## Project & deployment

| | |
|---|---|
| **Repo** | `/Users/farhanhaque/Desktop/Fashion_Website_ForCLaude` — static SPA, plain HTML/CSS/JS, no build step |
| **Local** | `http://localhost:4173` — user runs their own `nohup python3 -m http.server 4173`. If `curl localhost:4173` returns nothing, restart it. |
| **Live** | https://virdasia.com (Vercel, git-linked, auto-deploys on push). Apex 308-redirects to `www`. |
| **Git** | github.com/darthpreso/Virdasia. **User pushes via GitHub Desktop — CLI push fails (keychain). You cannot push.** |
| **Current** | **v122 — pushed and live.** Working tree clean. |

**Hash routes:** `#/home #/shop #/product/<id> #/about #/settings #/cart #/checkout #/terms #/privacy #/shipping #/contact #/error`

### Cache busting — do this on EVERY css/js edit
`index.html` contains `styles.css?v=122` and `app.js?v=122`. **Bump both** after any edit:
```bash
sed -i '' 's/v=122/v=123/g' index.html
```
`index.html` itself is unversioned, so always remind the user to hard-refresh (Cmd+Shift+R).

### Main files
- `app.js` (~3000 lines) — products array, state, hash routing, all page renderers, event handlers, Supabase auth/waitlist/orders/checkout/discounts. `render()` regenerates `#app` innerHTML on each state change; `bindEvents()` re-attaches listeners after every render.
- `styles.css` (~4300 lines) — base rules → per-style overrides → responsive media queries at the bottom.
- `index.html` — shell; fonts, full SEO/OG meta, favicons, Supabase SDK.
- `supabase-config.js` — exposes `window.NEBULA_SUPABASE_CONFIG` (note the legacy `NEBULA_` prefix).
- `email-templates/` — **read-only rendered previews** of the emails, for design review. Editing them changes nothing; the live templates live in edge-function code. Exception: `reset-password.html` is paste-able source, now obsolete if the auth hook is ever enabled.

---

## Supabase — project `htgfopqvwbazurjbmuxf`

URL `https://htgfopqvwbazurjbmuxf.supabase.co` · publishable key `sb_publishable_9zBEjrAXm4-uJJXHbp8wDg_Q8IgMjtT`

**Tables:** `waitlist`, `orders`, `discount_codes`, `email_optouts` — all RLS-enabled.
**RPCs:** `waitlist_counts()` (public scarcity counter), `promo_email_candidates()` (promo eligibility, service-role only).

### Edge functions (all `verify_jwt=false`, each authenticates itself)
| Function | v | Purpose |
|---|---|---|
| `waitlist-emails` | 7 | Waitlist confirmation + 7-day reminder. Gated by `x-webhook-secret`. |
| `welcome-email` | 1 | Fires when an account is confirmed. |
| `promo-emails` | 2 | Week-one 20% promo. Cron-driven. |
| `unsubscribe` | 1 | CASL opt-out. Public link, HMAC-token authorised. |
| `validate-discount` | 1 | Checks a code for the signed-in user (advisory quote only). |
| `create-checkout` | 4 | Stripe session. Requires sign-in; re-validates discount server-side. |
| `stripe-webhook` | 3 | Records paid orders; redeems the discount code. |
| `delete-account` | 1 | Self-serve deletion; re-verifies password server-side. |
| `send-auth-email` | 1 | **Deployed but DORMANT** — Supabase Send Email Hook, for per-type From addresses. Inert until `SEND_EMAIL_HOOK_SECRET` is set and the hook is enabled. |

### DB triggers
- `waitlist_confirmation_ai` — AFTER INSERT on `waitlist` → confirmation email.
  ⚠️ **Inserting a test row into `waitlist` sends a real email.** Use a throwaway address.
- `welcome_email_au` — AFTER UPDATE of `email_confirmed_at` (null→not-null) on `auth.users`.
- `welcome_email_ai` — AFTER INSERT on `auth.users` when already confirmed. Mutually exclusive with the above; neither can double-send.

### Cron (pg_cron)
- `waitlist-weekly-reminders` — daily 15:00 UTC
- `promo-week1-emails` — daily 16:00 UTC

### Edge function secrets
Set: `BREVO_API_KEY`, `WEBHOOK_SECRET` = `fa62725af9c5a181439b4a6e85eaba888e57c06851fbd210`, `STRIPE_SECRET_KEY` (test).
**Missing:** `STRIPE_WEBHOOK_SECRET`, `SEND_EMAIL_HOOK_SECRET`.

> ⚠️ **Never rotate `WEBHOOK_SECRET`.** It also derives the HMAC in every unsubscribe link already sitting in inboxes. Rotating it silently breaks them — which is exactly the CASL problem the link exists to solve. If it must be rotated, the tokens need migrating first.

### Current data
1 user (`farhanhaque888@gmail.com`) · 0 waitlist · 0 orders · 0 opt-outs · 1 discount code: **`VIRDTESTME20`** (20%, live, for testing the checkout field).

---

## Email inventory

All send via **Brevo**. Domain authenticated in Cloudflare (DKIM `brevo1/2._domainkey`, merged SPF).

| Email | Trigger | Sent by | From |
|---|---|---|---|
| Confirm signup | Account created | Supabase Auth → Brevo SMTP | SMTP sender setting |
| Reset password | Forgot-password | Supabase Auth → Brevo SMTP | SMTP sender setting |
| Welcome | Email confirmed | `welcome-email` → Brevo API | `hello@virdasia.com` |
| Waitlist confirmation | Waitlist join | `waitlist-emails` → Brevo API | `hello@virdasia.com` |
| Waitlist reminder | 7 days after joining | `waitlist-emails` cron | `hello@virdasia.com` |
| Week-one promo | 7 days post-signup, if no order/waitlist | `promo-emails` cron | `hello@virdasia.com` |

`support@virdasia.com` **sends nothing** — it's a reply-to/contact address only. Both it and `hello@` forward to `fbusinesses444@gmail.com` via Cloudflare Email Routing.

**CASL compliance:** every marketing email carries the Toronto postal address, an unsubscribe link, and RFC 8058 `List-Unsubscribe` one-click headers. Opt-outs are honoured by the reminder and promo jobs. Don't ship a marketing email without these.

---

## Discount system

Week-one promo: 7 days after signup, **only if** the user has no orders **and** no waitlist entries, isn't opted out, and hasn't been sent one. (Waitlisters are excluded deliberately — they already get the waitlist reminder; two marketing emails in a week would be spammy.)

- Code format `VIRD` + 8 chars, alphabet excludes `O/0/I/1`.
- **20% off the whole order**, single-use, **180-day expiry** (long because ordering isn't open yet — shorten once a launch date exists).
- Applied via a Stripe coupon (`virdasia-20off`, `duration: once`), created lazily.
- **Validated twice** — `validate-discount` for the on-screen quote, again inside `create-checkout` for the actual charge. A bad code fails the whole checkout rather than silently charging full price.
- **Redeemed only on successful payment**, in the webhook — abandoned carts don't burn it; retries are idempotent.
- Same error whether a code doesn't exist or belongs to someone else, so codes can't be discovered.

---

## Stripe

Separate "Virdasia" account (Individual/sole-prop, Canada). **Test mode.**
`STRIPE_SECRET_KEY` (sk_test) verified working. Publishable key not needed (redirect flow).

**Prices are hardcoded in TWO places — keep in sync:** the `products` array in `app.js` AND the `PRICES` map in `create-checkout` (cents).

⚠️ **Checkout collects no shipping cost and no tax.** The cart says "Shipping and taxes are calculated at checkout", which is currently false. With 20% off on top, a $35 jacket to Australia could ship below cost. Deferred by the user until purchases go live, but revisit before turning them on.

---

## Products (7)

Live/waitlistable: Shadow Grin Fleece $40 · Pirate King Hybrid Jacket $70 · Son of Nolan Jacket $35 · Legendary Corduroy Jacket $40 · Wild Encounter Knit Sweater $50 · Six Paths Sherpa Jacket $50.
Coming soon: Eternal Mangekyo Denim Jacket $85 (overlay, not clickable).

`waitlistReserved`/`waitlistCapacity` per product drive the X/Y counter, **added to** the live DB count.

---

## Gotchas — read before editing

- **Home animation codecs.** `home-animation-v2.mov` is **HEVC-with-alpha — Safari only**. `home-animation-v2.mp4` (H.264, generated with macOS `avconvert`) serves everyone else. Both `<source>`s are required. The shop transition sets `src` directly and picks via `canPlayType`. The MP4 has no alpha (composited on black) — fine on the black stage, would diverge on any other background. There is **no `poster`** by design: everything behind is `#000`, and a poster that isn't frame 0 visibly jumps.
- **Screenshots.** `background-attachment: fixed` + `zoom` produce black bands on scrolled shop/sakura/vapourwave screenshots. Use a tall viewport or read the DOM instead of scrolling.
- **`.contained` is sized from the viewport** (`min(1188px, 100vw - 108px)`), so it overflows the narrower white card in the sakura/vapourwave shells. Fixed **only** for `.settings-page`. Other `.contained` pages likely still overflow in those shells — unaudited.
- Don't remove `display: flow-root` on shells (margin-collapse fix).
- Two-class specificity traps like `.product-card.vapourwave-card`.
- `--default-site-scale: 0.9` zoom on non-home shells — `getBoundingClientRect()` values are scaled, computed CSS values are not. Don't mix them when measuring.
- **Toasts are wiped by re-render.** Setting `location.hash` queues a render that rebuilds the toast node — defer `showToast` ~450ms past it.
- `localStorage` keys still use the legacy `nebula-` prefix (`nebula-cart`, `nebula-settings-panels`, …).
- **Auth modal modes:** `signin, signup, forgot, recovery, resend, sent, password`. Only the modes in `AUTH_MODES_DISMISS_ON_SIGNIN` auto-close when a session appears — `recovery`, `password` and `sent` must survive, or success screens get wiped the instant they appear.
- **Every modal action that completes shows a confirmation screen** the user dismisses (Done/×/backdrop) — never auto-close. Sign-in is the deliberate exception (its result is immediately visible).

---

## Outstanding

**User-only (Supabase dashboard):**
1. **SMTP sender → `support@virdasia.com`** — Auth → SMTP Settings → *Sender email address*. Only that field; host/port/username/password are Brevo relay credentials and stay as-is. Last seen still `hello@`.
2. **"Minimum interval per user" 60 → 15 seconds** — same SMTP screen. This is the resend cooldown; the frontend already parses the real value out of Supabase's 429, so the countdown follows whatever is set.
3. **Stripe:** create webhook endpoint `https://htgfopqvwbazurjbmuxf.supabase.co/functions/v1/stripe-webhook`, event `checkout.session.completed`, then add `STRIPE_WEBHOOK_SECRET`. Until then **no order is ever recorded and no discount code is ever redeemed.**
4. Optional: enable the `send-auth-email` hook for per-type From addresses (reset→support@, signup→hello@). Needs `SEND_EMAIL_HOOK_SECRET` set **before** enabling the hook. Note it makes dashboard email templates inert.

**Untested end-to-end (need a real inbox / real session):**
- Welcome email (function + triggers verified; delivery not)
- Promo email (eligibility rule proven in SQL; delivery not)
- Discount happy path — use `VIRDTESTME20`
- A successful password change (everything up to the reauth call is verified)

**Deferred by the user:** shipping rates, tax, inventory/stock tracking, order confirmation emails, guest checkout.
**Later:** analytics (Cloudflare Web Analytics), downscale `lookbook-4.jpg` (6000×4000), Stripe live activation, register "Virdasia" business name in Ontario.

---

## Working style

- User iterates visually — **provide screenshots**, don't ask them to check.
- Verify with the browser tools at `localhost:4173`; check console for errors after changes.
- Bump `?v=` every edit; remind about hard-refresh.
- User pushes to GitHub themselves.
- Available: Supabase MCP (SQL, migrations, edge functions, logs, advisors), Vercel/Cloudflare MCPs, Bash (curl/dig), browser tools.
- **Not** available: Supabase Auth dashboard config, Stripe dashboard, Brevo dashboard, git push.
- **Test data hygiene:** inserting into `waitlist` or confirming a user fires live email triggers. Use throwaway addresses and clean up. A prior test insert mailed the user a confusing "Test Probe" waitlist confirmation.

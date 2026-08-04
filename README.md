# Virdasia Fashion Website

Static prototype for the Virdasia fashion storefront.

## Local Development

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173/#/home`.

## Supabase

The site reads browser-safe Supabase settings from `supabase-config.js`.

Set `publishableKey` to the public anon/publishable key from the Supabase `Fashion Website` project before testing auth.

Never put a Supabase service role key in this repository.

const products = [
  {
    id: "shadow-grin-fleece",
    name: '"Shadow Grin" Fleece',
    shortName: "Shadow Grin",
    osName: "shadow_grin_fleece",
    category: "Fleece jacket",
    colorway: "Purple fleece + dark purple artwork + red lining",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Fleece",
    price: 145,
    image: "assets/product-shadow-grin-fleece.png",
    subtitle: "A relaxed purple fleece jacket with dark tonal artwork, red lining, side pockets, and a black front zipper.",
    description: [
      "A relaxed purple fleece jacket with dark tonal artwork worked across the body and sleeves. The soft low-pile fleece shell, red lining, side welt pockets, and black front zipper give it a quiet supernatural energy without making the piece feel too loud.",
      "Built for fall and winter layering, this jacket balances soft texture with graphic detail. The purple fleece body keeps the look wearable, while the dark purple artwork adds depth across the garment."
    ],
    details: ["Relaxed menswear fit", "Low-pile unbrushed fleece body", "Dark purple all-over sublimation-style artwork", "Black #5 front zipper", "Side welt pockets", "Red inner lining and inner facing", "Available in S, M, L"],
    materials: ["Main fabric: 100% polyester fleece", "Fleece weight: 280-320 GSM", "Inner lining: 100% polyester taffeta", "Inner facing: 100% polyester woven fabric", "Zipper: black metal zipper"],
    sizeFit: "Relaxed outerwear fit with room for layering. True to size for a relaxed fleece-jacket fit. Size down for a cleaner fit.",
    care: "Machine wash cold inside out on gentle cycle. Wash with similar colors. Do not bleach. Hang dry or tumble dry low if needed. Do not iron directly over artwork, print, sherpa, embroidery, or hardware.",
    sizeGuideUnit: "in",
    sizeGuide: [{ size: "S", chest: '50"', length: '23.75"', sleeve: '25.5"' }, { size: "M", chest: '52"', length: '25"', sleeve: '26"' }, { size: "L", chest: '54"', length: '25.75"', sleeve: '26.5"' }],
  },
  {
    id: "pirate-king-hybrid-jacket",
    name: '"Pirate King" Hybrid Jacket',
    shortName: "Pirate King",
    osName: "pirate_king_hybrid_jacket",
    category: "Cotton / sherpa hybrid jacket",
    colorway: "White cotton + white sherpa + grey artwork + purple lining/buttons",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Cotton + Sherpa",
    price: 185,
    image: "assets/product-pirate-king-hybrid-jacket.png",
    subtitle: "A white heavyweight cotton jacket with sherpa trim, subtle grey artwork, purple lining, and purple buttons.",
    description: [
      "A relaxed white cotton jacket with soft sherpa accents and subtle grey artwork across the body and sleeves. The structured heavyweight twill gives it shape, while the sherpa collar, cuffs, and hem add warmth and texture.",
      "This is a cleaner, brighter statement piece built around contrast: structured cotton against soft sherpa, white outer fabric against a purple inner lining, and subtle grey artwork across the panels."
    ],
    details: ["Relaxed menswear fit", "Heavyweight white cotton twill body", "White high-pile sherpa collar, sleeve cuffs, and bottom hem", "Subtle grey all-over printed artwork", "Purple polyester taffeta lining", "Purple front buttons and cuff buttons", "Available in S, M, L"],
    materials: ["Main fabric: 100% cotton twill", "Main fabric weight: 380-420 GSM / approx. 12 oz per square yard", "Secondary fabric: 100% polyester sherpa fleece", "Sherpa weight: 350-400 GSM", "Inner lining: 100% polyester taffeta"],
    sizeFit: "Relaxed fit with structured cotton body and soft sherpa trim. True to size for relaxed fit. Size down if the customer wants less volume.",
    care: "Machine wash cold inside out on gentle cycle. Wash with similar colors. Do not bleach. Hang dry or tumble dry low if needed. Do not iron directly over artwork, print, sherpa, embroidery, or hardware.",
    sizeGuideUnit: "in",
    sizeGuide: [{ size: "S", chest: '46"', length: '25"', sleeve: '25.5"' }, { size: "M", chest: '48"', length: '26"', sleeve: '26"' }, { size: "L", chest: '50"', length: '27"', sleeve: '26.75"' }],
  },
  {
    id: "son-of-nolan-jacket",
    name: '"Son of Nolan" Jacket',
    shortName: "Son of Nolan",
    osName: "son_of_nolan_jacket",
    category: "Cotton panel jacket",
    colorway: "Black + yellow + blue",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Cotton",
    price: 165,
    image: "assets/product-son-of-nolan-jacket.png",
    subtitle: "A bold black, yellow, and blue cotton jacket built with cut-and-sewn color panels.",
    description: [
      "A bold relaxed cotton jacket built with cut-and-sewn black, yellow, and blue color panels. The structured heavyweight cotton twill gives it a clean outerwear shape, while the contrast placket, cuffs, and hem create a sharp hero-inspired look.",
      "Because the color is built through cut-and-sewn panels rather than only print, the design feels more integrated into the garment construction."
    ],
    details: ["Relaxed menswear fit", "100% heavyweight cotton twill", "Cut-and-sewn color panels", "Black body panels", "Yellow front placket and sleeve cuffs", "Blue bottom hem", "Matte black front buttons", "Available in S, M, L"],
    materials: ["Main fabric: 100% cotton twill", "Heavyweight fabric, approx. 12 oz per square yard", "Handfeel: smooth, slightly stiff / structured", "Buttons: 22mm matte black plastic buttons", "Thread: 100% polyester in matching panel colors"],
    sizeFit: "Relaxed structured outerwear fit with graphic panel blocking. True to size for relaxed fit. Size down for a closer fit.",
    care: "Machine wash cold inside out on gentle cycle. Wash with similar colors. Do not bleach. Hang dry or tumble dry low if needed. Do not iron directly over artwork, print, sherpa, embroidery, or hardware.",
    sizeGuideUnit: "in",
    sizeGuide: [{ size: "S", chest: '46"', length: '25"', sleeve: '25.5"' }, { size: "M", chest: '48"', length: '26"', sleeve: '26"' }, { size: "L", chest: '50"', length: '27"', sleeve: '26.75"' }],
  },
  {
    id: "legendary-corduroy-jacket",
    name: '"Legendary" Corduroy Jacket',
    shortName: "Legendary",
    osName: "legendary_corduroy_jacket",
    category: "Corduroy panel jacket",
    colorway: "Purple + pink + white + black",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Corduroy",
    price: 175,
    image: "assets/product-legendary-corduroy-jacket.png",
    subtitle: "A textured corduroy jacket with purple, pink, white, and black cut-and-sewn panels.",
    description: [
      "A relaxed corduroy jacket built with bold purple, pink, white, and black cut-and-sewn panels. The heavyweight 9-wale cotton corduroy gives it a soft textured feel, while the panel layout creates a clean collectible-inspired graphic look.",
      "This jacket uses color blocking as the main design language. The panel breaks create a strong front and back visual while keeping the silhouette simple and wearable."
    ],
    details: ["Relaxed menswear fit", "100% cotton corduroy", "Heavyweight 9-wale woven pile fabric", "Purple, pink, white, and black cut-and-sewn panels", "Pointed collar with structure", "Front button placket", "Side welt pockets", "Available in S, M, L"],
    materials: ["Main fabric: 100% cotton corduroy", "Fabric type: woven pile fabric", "Weight: heavyweight, 9-wale corduroy", "Pocket bags: lightweight cotton twill", "Buttons: 22mm plastic buttons"],
    sizeFit: "Relaxed structured fit with soft heavyweight corduroy texture. True to size for relaxed fit. Size down for a sharper silhouette.",
    care: "Machine wash cold inside out on gentle cycle. Wash with similar colors. Do not bleach. Hang dry or tumble dry low if needed. Do not iron directly over artwork, print, sherpa, embroidery, or hardware.",
    sizeGuideUnit: "in",
    sizeGuide: [{ size: "S", chest: '46"', length: '25"', sleeve: '25.5"' }, { size: "M", chest: '48"', length: '26"', sleeve: '26"' }, { size: "L", chest: '50"', length: '27"', sleeve: '26.75"' }],
  },
  {
    id: "wild-encounter-knit-sweater",
    name: '"Wild Encounter" Knit Sweater',
    shortName: "Wild Encounter",
    osName: "wild_encounter_knit_sweater",
    category: "Knit crewneck sweater",
    colorway: "Dark green knit + multi-color jacquard artwork",
    fit: "Regular menswear fit",
    badge: "Fall/Winter / Knitwear",
    price: 135,
    image: "assets/product-wild-encounter-knit-sweater.png",
    subtitle: "A dark green 7-gauge knit crewneck with pixel-style jacquard artwork on the lower sleeves and cuffs.",
    description: [
      "A dark green knit crewneck sweater with subtle pixel-style jacquard artwork knitted into the lower sleeves and cuffs. The 7-gauge jersey knit gives it a medium-weight feel with a soft, structured drape.",
      "Because the artwork is knitted directly into the fabric, it feels more integrated than a surface print. The dark green base makes the multicolor sleeve details feel more intentional and wearable."
    ],
    details: ["Regular menswear fit", "Crewneck sweater", "7GG jersey knit construction", "Cotton/wool blend yarn", "Dark green main body", "Pixel-style jacquard artwork on lower sleeves and cuffs", "Ribbed neckband and bottom band", "Available in S, M, L"],
    materials: ["Main yarn: cotton/wool blend", "Knit gauge: 7GG jersey stitch", "Medium-weight knit structure", "Jacquard yarns: teal, dark blue, olive green, red, white, pink, and blue", "Sewing/topstitching thread: 100% polyester"],
    sizeFit: "Regular sweater fit with a medium-weight knit feel. True to size for a regular sweater fit. Size up for a looser fit.",
    care: "Hand wash cold or machine wash cold on delicate inside out. Use mild detergent. Do not bleach. Lay flat to dry to help preserve knit shape. Store folded instead of hanging to prevent stretching.",
    sizeGuideUnit: "cm",
    sizeGuide: [{ size: "S", chest: "106 cm", length: "68 cm", sleeve: "59 cm" }, { size: "M", chest: "112 cm", length: "70 cm", sleeve: "62 cm" }, { size: "L", chest: "118 cm", length: "72 cm", sleeve: "65 cm" }],
  },
  {
    id: "six-paths-sherpa-jacket",
    name: '"Six Paths" Sherpa Jacket',
    shortName: "Six Paths",
    osName: "six_paths_sherpa_jacket",
    category: "Sherpa jacket",
    colorway: "Light purple sherpa + black artwork + black lining/binding",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Sherpa",
    price: 195,
    image: "assets/product-six-paths-sherpa-jacket.png",
    subtitle: "A light purple sherpa jacket with bold black all-over artwork, black lining, and snap-button front.",
    description: [
      "A light purple sherpa jacket covered in bold black all-over graphic artwork. Built with a soft sherpa fleece outer, black inner lining, side welt pockets, and a snap-button placket, this piece is warm, textured, and visually striking.",
      "The black printed linework creates movement across the front, back, and sleeves, while the black binding and bottom hem frame the light purple sherpa body."
    ],
    details: ["Relaxed menswear fit", "100% polyester sherpa fleece", "Light purple sherpa body", "Black all-over graphic print", "Black polyester taffeta inner lining", "Snap-button front placket", "Side welt pockets", "Available in S, M, L"],
    materials: ["Main fabric: 100% polyester sherpa fleece", "Sherpa weight: 380-420 GSM", "Pile height: medium", "Inner lining: 100% polyester taffeta", "Binding: polyester woven twill tape"],
    sizeFit: "Relaxed sherpa fit with a fuller textured feel. True to size for a relaxed sherpa fit. Size down only if between sizes.",
    care: "Machine wash cold inside out on gentle cycle. Wash separately or with similar colors. Do not bleach. Hang dry recommended to preserve sherpa texture. Do not iron sherpa or printed areas.",
    sizeGuideUnit: "in",
    sizeGuide: [{ size: "S", chest: '49"', length: '23.75"', sleeve: '25.5"' }, { size: "M", chest: '51"', length: '24.75"', sleeve: '26"' }, { size: "L", chest: '53"', length: '25.75"', sleeve: '26.5"' }],
  },
  {
    id: "eternal-mangekyo-denim-jacket",
    name: '"Eternal Mangekyo" Denim Jacket',
    shortName: "Eternal Mangekyo",
    osName: "eternal_mangekyo_denim_jacket",
    category: "Embroidered denim jacket",
    colorway: "Blue denim + tonal blue embroidery",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Denim",
    price: null,
    image: "assets/product-eternal-mangekyo-denim-jacket.png",
    subtitle: "A relaxed blue denim jacket with large tonal blue embroidery across the front, back, and sleeves.",
    description: [
      "A relaxed blue denim jacket with large tonal blue embroidery across the front, back, and sleeves. Made from heavyweight 100% cotton denim, it combines a classic trucker-style shape with expressive illustrated embroidery.",
      "The tonal embroidery adds texture and depth while staying within the blue color family, making the piece bold without feeling overly loud."
    ],
    details: ["Relaxed menswear fit", "100% cotton denim", "Heavyweight 12 oz twill denim", "Tonal blue embroidery across front, back, and sleeves", "Satin-stitch embroidery outlines with filled embroidery areas", "Antique brass metal buttons", "Available in S, M, L"],
    materials: ["Main fabric: 100% cotton denim", "Fabric weight: heavyweight, approx. 12 oz per square yard", "Weave: twill denim", "Embroidery thread: 100% polyester", "Buttons: 22mm antique brass metal shank buttons"],
    sizeFit: "Relaxed structured denim fit with layering room. True to size for a relaxed denim jacket fit. Size down for a closer fit.",
    care: "Machine wash cold inside out on gentle cycle. Wash separately or with similar colors; denim may bleed color at first. Do not bleach. Hang dry recommended. Do not iron directly over embroidery.",
    sizeGuideUnit: "in",
    sizeGuide: [{ size: "S", chest: '47"', length: '24.5"', sleeve: '25.4"' }, { size: "M", chest: '49"', length: '26"', sleeve: '26"' }, { size: "L", chest: '51"', length: '27"', sleeve: '26.6"' }],
  },
];

const styleOptions = [
  ["default", "Default", "Floating artworks"],
  ["sakura", "Sakura", "Sky backdrop, white panel"],
  ["sakura-3d", "Sakura 3D", "Sky backdrop, framed tiles"],
  ["vapourwave", "Vapourwave", "Aesthetic OS dreamscape"],
];

const sakura3dOptions = [
  ["polaroid", "Polaroid", "Framed pastel photo cards"],
  ["glass", "Glass", "Clean translucent display panels"],
  ["game", "Game", "Retro desktop windows"],
];

const launchModes = [
  ["pre", "Pre-Launch", "Waitlist only · 0/50 per item"],
  ["full", "Full-Launch", "Full shopping experience"],
];

const backgroundArts = [
  ["cople", "Cherry blossom couple artwork", "assets/bg-cople.png"],
  ["celeste", "Celestial character artwork", "assets/bg-celeste.png"],
  ["clash", "Dueling swordsmen artwork", "assets/bg-clash.png"],
  ["dragon", "Dragon rider artwork", "assets/bg-dragon.png"],
  ["cyberpunk", "Cyberpunk bench artwork", "assets/bg-cyberpunk.png"],
  ["funk", "Cartoon streetwear character artwork", "assets/bg-funk.png"],
];

const legalUpdated = "May 23, 2026";

const state = {
  route: "home",
  cart: readJson("nebula-cart", []),
  settings: readJson("nebula-settings", {
    name: "",
    email: "",
    launchMode: "pre",
    style: "default",
    sakura3dVariant: "polaroid",
  }),
  auth: {
    client: null,
    configured: false,
    ready: false,
    session: null,
    user: null,
    error: "",
  },
};

state.settings.sakura3dVariant ||= "polaroid";

const icons = {
  gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 1.98l.04.04a2.1 2.1 0 0 1-2.97 2.97l-.04-.04a1.8 1.8 0 0 0-1.98-.36 1.8 1.8 0 0 0-1.09 1.65V21.3a2.1 2.1 0 0 1-4.2 0v-.06a1.8 1.8 0 0 0-1.09-1.65 1.8 1.8 0 0 0-1.98.36l-.04.04a2.1 2.1 0 0 1-2.97-2.97l.04-.04A1.8 1.8 0 0 0 3.85 15a1.8 1.8 0 0 0-1.65-1.09H2.1a2.1 2.1 0 0 1 0-4.2h.1a1.8 1.8 0 0 0 1.65-1.09 1.8 1.8 0 0 0-.36-1.98l-.04-.04a2.1 2.1 0 0 1 2.97-2.97l.04.04a1.8 1.8 0 0 0 1.98.36 1.8 1.8 0 0 0 1.09-1.65V2.1a2.1 2.1 0 0 1 4.2 0v.27a1.8 1.8 0 0 0 1.09 1.65 1.8 1.8 0 0 0 1.98-.36l.04-.04a2.1 2.1 0 0 1 2.97 2.97l-.04.04a1.8 1.8 0 0 0-.36 1.98c.28.68.94 1.11 1.67 1.11h.06a2.1 2.1 0 0 1 0 4.2h-.06A1.8 1.8 0 0 0 19.4 15Z"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M6.5 8.5h11l1 12h-13l1-12Z"/><path d="M9 8.5V6a3 3 0 0 1 6 0v2.5"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7-11-7Z"/></svg>`,
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function routeFromHash() {
  const route = window.location.hash.replace(/^#\/?/, "") || "home";
  if (route.startsWith("product/")) return route;
  return ["home", "shop", "about", "settings", "cart", "terms", "privacy", "contact"].includes(route) ? route : "home";
}

function setRoute() {
  state.route = routeFromHash();
  render();
  window.scrollTo({ top: 0 });
}

function header() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const active = state.route;

  return `
    <header class="site-header">
      <a class="brand" href="#/home" aria-label="Nebula home">
        <span class="brand-mark">Nebula</span>
        <span class="brand-kana">ネビュラ</span>
      </a>
      <nav class="main-nav" aria-label="Primary">
        <a class="nav-link ${active === "shop" || active.startsWith("product/") ? "active" : ""}" href="#/shop">Shop</a>
        <a class="nav-link ${active === "about" ? "active" : ""}" href="#/about">About</a>
      </nav>
      <div class="header-actions">
        <a class="icon-link" href="#/cart" aria-label="Shopping cart">
          ${icons.bag}
          <span class="cart-count ${count ? "visible" : ""}">${count}</span>
        </a>
        <a class="icon-link" href="#/settings" aria-label="Settings">${icons.gear}</a>
      </div>
    </header>
  `;
}

function pageShell(content, options = {}) {
  const headerMarkup = options.hideHeader ? "" : header();
  const footerMarkup = options.hideFooter ? "" : footer();
  return `<div class="site-shell ${options.shellClass || ""}">${headerMarkup}${content}${footerMarkup}<div id="toast" class="toast"></div></div>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <a class="brand footer-brand" href="#/home" aria-label="Nebula home">
        <span class="brand-mark">Nebula</span>
        <span class="brand-kana">ネビュラ</span>
      </a>
      <nav class="footer-nav" aria-label="Footer">
        <a href="#/terms">Terms Of Service</a>
        <a href="#/privacy">Privacy Policy</a>
        <a href="#/contact">Contact</a>
      </nav>
      <p>Prototype storefront. Legal copy is draft placeholder content.</p>
    </footer>
  `;
}

function breadcrumb(current, middle = "") {
  const parts = [`<a href="#/home">Home</a>`];
  if (middle) parts.push(middle);
  parts.push(current);
  return `<div class="breadcrumb">${parts.join(" / ")}</div>`;
}

function productById(id) {
  return products.find((product) => product.id === id);
}

function priceLabel(product) {
  return Number.isFinite(product.price) ? `$${product.price}` : "Price TBD";
}

function productUrl(product) {
  return `#/product/${product.id}`;
}

function productRouteId() {
  return state.route.replace(/^product\//, "");
}

function homePage() {
  return pageShell(`
    <main class="home-page">
      <section class="home-stage" aria-label="Enter shop">
        <video
          class="entry-video"
          data-entry-video
          preload="auto"
          playsinline
          muted
        >
          <source src="assets/final-flash.mp4" type="video/mp4" />
          <source src="assets/final-flash.mov" type="video/quicktime" />
        </video>
        <div class="home-vignette" aria-hidden="true"></div>
        <button class="shop-enter-button" type="button" data-enter-shop aria-label="Play animation and enter shop">
          <span class="shop-enter-title">Shop</span>
          <span class="shop-enter-kana">ショップ</span>
        </button>
        <p class="press-enter">Press To Enter</p>
      </section>
    </main>
  `, { hideHeader: true, hideFooter: true, shellClass: "home-shell" });
}

function aboutPage() {
  return pageShell(`
    <main class="page about-page">
      <section class="narrow">
        <p class="eyebrow">About</p>
        <h1 class="display-title">A house of myths.</h1>
        <div class="about-copy">
          <p>Nebula is a placeholder brand statement. We make small-batch garments inspired by anime, folklore, and the quiet pull of distant galaxies.</p>
          <p>Every drop is a chapter -- characters, colors, and glyphs woven into wearable pieces. This copy will be replaced with the real story shortly.</p>
          <p>Founded between two cities. Made for the wanderers in between.</p>
        </div>
      </section>
    </main>
  `);
}

function legalPage(type) {
  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms Of Service";
  const sections = isPrivacy
    ? [
        ["Overview", "This draft Privacy Policy explains how Nebula may collect, use, and protect customer information when visitors use this website, create an account, join a waitlist, place an order, or contact us."],
        ["Information We Collect", "We may collect account details such as name, email address, authentication identifiers, order details, shipping information, support messages, device data, and website usage data."],
        ["How We Use Information", "We use information to provide account access, process orders, manage waitlists, respond to support requests, improve the store experience, prevent fraud, and send transactional or marketing communications where permitted."],
        ["Service Providers", "We may share information with vendors that help run the store, including authentication, payment, shipping, analytics, hosting, email, and customer support providers. They should only use information to provide services to Nebula."],
        ["Cookies And Local Storage", "The website may use cookies, browser storage, and similar technologies to keep users signed in, remember preferences, maintain carts, measure site performance, and improve product discovery."],
        ["Your Choices", "Customers may request account updates, unsubscribe from marketing emails, or ask for deletion of personal information where applicable law allows. Some order records may need to be retained for legal, tax, or fraud-prevention reasons."],
        ["Security", "We use reasonable technical and organizational safeguards, including Supabase Auth for account access. No online service is completely secure, so this section should be reviewed by counsel before launch."],
      ]
    : [
        ["Overview", "These draft Terms of Service govern access to and use of the Nebula website, product pages, accounts, waitlists, carts, and related services. They are placeholder terms and should be reviewed before launch."],
        ["Eligibility", "By using this website, customers confirm they can enter into a binding agreement and will provide accurate account, contact, billing, and shipping information."],
        ["Accounts", "Customers are responsible for keeping login credentials secure and for activity that occurs through their account. Nebula may suspend or close accounts that violate these terms, misuse the site, or create operational risk."],
        ["Products And Availability", "Product descriptions, prices, images, sizing, inventory, launch modes, preorder status, and availability may change. Prototype pages may contain placeholder details until final production information is confirmed."],
        ["Orders, Payments, And Shipping", "Final checkout, payment processing, shipping timelines, taxes, duties, cancellations, and return rules will be shown during checkout or in a dedicated shipping and returns policy before launch."],
        ["Intellectual Property", "The Nebula name, website design, product photography, product artwork, copy, and other content are owned by Nebula or its licensors and may not be copied or reused without permission."],
        ["Limitation Of Liability", "To the extent permitted by law, Nebula is not liable for indirect, incidental, special, or consequential damages arising from use of the website or products. Final legal language should be reviewed by counsel."],
      ];

  return pageShell(`
    <main class="page legal-page">
      <section class="narrow">
        ${breadcrumb(title)}
        <h1 class="display-title">${title}</h1>
        <p class="legal-updated">Draft updated ${legalUpdated}</p>
        <div class="legal-copy">
          ${sections.map(([heading, copy]) => `
            <section>
              <h2>${heading}</h2>
              <p>${copy}</p>
            </section>
          `).join("")}
        </div>
      </section>
    </main>
  `);
}

function contactPage() {
  return pageShell(`
    <main class="page contact-page">
      <section class="narrow">
        ${breadcrumb("Contact")}
        <h1 class="display-title">Contact</h1>
        <div class="contact-grid">
          <article>
            <h2>Customer Support</h2>
            <p>support@example.com</p>
            <p>Replies within 1-2 business days.</p>
          </article>
          <article>
            <h2>Press</h2>
            <p>press@example.com</p>
            <p>Placeholder press and collaboration inbox.</p>
          </article>
          <article>
            <h2>Studio</h2>
            <p>Nebula Studio</p>
            <p>City, Country placeholder</p>
          </article>
        </div>
      </section>
    </main>
  `);
}

function shopPage() {
  const actionLabel = state.settings.launchMode === "pre" ? "Join Waitlist" : "Add To Cart";
  const isSakura = state.settings.style === "sakura";
  const isSakura3d = state.settings.style === "sakura-3d";
  const isVapourwave = state.settings.style === "vapourwave";
  const isSakuraScene = isSakura || isSakura3d;
  const sakura3dVariant = state.settings.sakura3dVariant || "polaroid";
  const shopControls = isSakuraScene
    ? `
      <section class="shop-bar sakura-shop-bar" aria-label="Product controls">
        <nav class="sakura-categories" aria-label="Product categories">
          <a class="active" href="#/shop">All Products</a>
          <a href="#/shop">Tops</a>
          <a href="#/shop">Bottoms</a>
          <a href="#/shop">Outerwear</a>
          <a href="#/shop">Accessories</a>
        </nav>
        <div class="sakura-controls">
          <button type="button">Filter +</button>
          <label>
            <span class="sr-only">Sort by</span>
            <select class="select-like" aria-label="Sort by">
              <option>Sort By</option>
              <option>Newest</option>
              <option>Price</option>
              <option>Name</option>
            </select>
          </label>
        </div>
      </section>
    `
    : isVapourwave
      ? ""
    : `
      <section class="shop-bar" aria-label="Product controls">
        <div class="shop-sort">
          <span>Filter</span>
          <label>
            <span class="sr-only">Sort by</span>
            <select class="select-like" aria-label="Sort by">
              <option>Sort By: Newest</option>
              <option>Sort By: Price</option>
              <option>Sort By: Name</option>
            </select>
          </label>
        </div>
        <div class="pager">
          <span>Page 1 Of 3</span>
          <button type="button" aria-label="Previous page">‹</button>
          <button type="button" aria-label="Next page">›</button>
        </div>
      </section>
    `;

  return pageShell(`
    <main class="page shop-page ${isSakuraScene ? "shop-page-sakura" : ""} ${isSakura3d ? `shop-page-sakura-3d sakura-3d-${sakura3dVariant}` : ""} ${isVapourwave ? "shop-page-vapourwave" : ""}">
      ${isVapourwave ? vapourwaveHeader() : ""}
      ${isSakuraScene || isVapourwave ? "" : `<div class="shop-background" aria-hidden="true">
        ${backgroundArts.map(([id, label, src]) => `<img class="shop-art shop-art-${id}" src="${src}" alt="${label}" />`).join("")}
      </div>`}
      <section class="shop-hero ${isSakuraScene ? "sakura-hero" : ""} ${isVapourwave ? "vapourwave-hero" : ""}">
        ${
          isSakuraScene
            ? `
              <div class="sakura-hero-copy">
                <p class="sakura-kicker">Wear The Future ✦</p>
                <h1>Shop</h1>
                <p class="sakura-japanese">美学を纏う。個性を解き放つ。</p>
                <p class="sakura-subcopy">Statement pieces for those<br />who refuse to blend in.</p>
              </div>
            `
            : isVapourwave
              ? `
                <div class="vapourwave-hero-copy">
                  <h1>Shop</h1>
                  <p class="vapourwave-japanese">未来はあなたのものだ。</p>
                  <p class="vapourwave-subcopy">The future is yours. ▸</p>
                </div>
              `
            : `${breadcrumb("All Products", "Shop")}<h1 class="display-title">All Products</h1>`
        }
      </section>
      ${shopControls}
      ${isVapourwave ? vapourwaveLayout(actionLabel) : `
        <section class="product-grid ${isSakura ? "sakura-product-panel" : ""} ${isSakura3d ? `sakura-3d-grid sakura-3d-grid-${sakura3dVariant}` : ""}" aria-label="Products">
          ${products.map((product) => productCard(product, actionLabel, isSakura3d ? sakura3dVariant : "")).join("")}
        </section>
      `}
    </main>
  `, { hideHeader: isVapourwave, shellClass: `${isSakuraScene ? "sakura-shell" : ""} ${isVapourwave ? "vapourwave-shell" : ""}` });
}

function vapourwaveHeader() {
  return `
    <header class="vapourwave-header">
      <a class="vapourwave-brand" href="#/home">Aesthetic + <span>美学 · 未来 · 根性</span></a>
      <nav class="vapourwave-nav" aria-label="Vapourwave navigation">
        <a class="active" href="#/shop">Shop</a>
        <a href="#/shop">Collections +</a>
        <a href="#/about">About +</a>
        <a href="#/shop">Journal +</a>
        <a href="#/contact">Contact</a>
      </nav>
      <div class="vapourwave-actions">
        <span>Search</span>
        <a href="#/cart">Cart (${state.cart.reduce((sum, item) => sum + item.qty, 0)})</a>
        <a href="#/cart" aria-label="Cart">${icons.bag}</a>
      </div>
    </header>
  `;
}

function vapourwaveLayout(actionLabel) {
  return `
    <section class="vapourwave-shop-surface" aria-label="Vapourwave products">
      <aside class="vapourwave-sidebar">
        <div class="vapour-panel category-panel">
          <h2>Categories_</h2>
          <a class="active" href="#/shop">All Products</a>
          <a href="#/shop">Tops <span>+</span></a>
          <a href="#/shop">Bottoms <span>+</span></a>
          <a href="#/shop">Outerwear <span>+</span></a>
          <a href="#/shop">Accessories <span>+</span></a>
          <a href="#/shop">Bags <span>+</span></a>
          <a href="#/shop">Headwear <span>+</span></a>
        </div>
        <div class="vapour-panel filter-panel">
          <h2>Filter_</h2>
          <div class="filter-row"><span>Size</span><span>All ▾</span></div>
          <div class="filter-row"><span>Color</span><span>All ▾</span></div>
          <div class="filter-price"><span>Price</span><span>+</span></div>
          <div class="range-line"><i></i><i></i></div>
          <div class="price-row"><span>$0</span><span>$300+</span></div>
          <div class="filter-actions"><button>Reset</button><button>Apply</button></div>
        </div>
        <div class="vapour-panel os-panel">
          <h2>Aesthetic_OS</h2>
          <p>Version 2.024<br />© Aesthetic Inc.<br />All rights reserved.</p>
        </div>
      </aside>
      <section class="vapourwave-grid" aria-label="Products">
        ${products.map((product) => productCard(product, actionLabel, "vapourwave")).join("")}
      </section>
    </section>
  `;
}

function productCard(product, actionLabel, frameStyle = "") {
  if (frameStyle === "vapourwave") {
    return `
      <article class="product-card vapourwave-card">
        <div class="vapour-window-bar"><span>⚙ +</span><span>− □ ×</span></div>
        <div class="vapour-window-body">
          <a class="product-card-link" href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}">
            <h3>"${product.osName}"</h3>
          </a>
          <a class="product-image-wrap product-card-link" href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" />
          </a>
          <div class="vapour-card-footer">
            <strong>${priceLabel(product)}</strong>
            <button type="button" data-add-product="${product.id}" aria-label="${actionLabel} ${escapeHtml(product.name)}">${icons.bag}</button>
          </div>
        </div>
        <div class="vapour-status-bar"><span></span><i></i></div>
      </article>
    `;
  }

  if (frameStyle) {
    const gameTitle = `${product.shortName.replaceAll(" ", "_")}.exe`;
    const frameHeader = frameStyle === "game"
      ? `<div class="game-window-bar"><span class="game-window-icon"></span><strong>"${gameTitle}"</strong><span class="game-window-controls">− □ ×</span></div>`
      : `<div class="sakura-frame-label">✦ ✦ ✦ Aesthetic ✦ ✦ ✦</div>`;

    return `
      <article class="product-card sakura-3d-card sakura-3d-card-${frameStyle}">
        ${frameHeader}
        <div class="sakura-3d-frame">
          <a class="product-image-wrap product-card-link" href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" />
          </a>
          <div class="product-meta">
            <a class="product-name product-card-link" href="${productUrl(product)}">${product.name}</a>
            <div class="product-price">${priceLabel(product)}</div>
            <button class="product-action" type="button" data-add-product="${product.id}">${actionLabel}</button>
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="product-card">
      <a class="product-image-wrap product-card-link" href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" />
      </a>
      <div class="product-meta">
        <a class="product-name product-card-link" href="${productUrl(product)}">${product.name}</a>
        <div class="product-price">${priceLabel(product)}</div>
        <button class="product-action" type="button" data-add-product="${product.id}">${actionLabel}</button>
      </div>
    </article>
  `;
}

function productDetailPage() {
  const product = productById(productRouteId());
  if (!product) {
    return pageShell(`
      <main class="page product-detail-page">
        <section class="narrow">
          ${breadcrumb("Product Not Found", "Shop")}
          <h1 class="display-title">Product Not Found</h1>
          <p class="empty-cart">That piece is not in the current catalog.</p>
          <a class="primary-button inline-button" href="#/shop">Back To Shop</a>
        </section>
      </main>
    `);
  }

  const actionLabel = state.settings.launchMode === "pre" ? "Join Waitlist" : "Add To Cart";
  const isSakuraScene = state.settings.style === "sakura" || state.settings.style === "sakura-3d";
  const isVapourwave = state.settings.style === "vapourwave";
  const shellClass = `${isSakuraScene ? "sakura-shell" : ""} ${isVapourwave ? "vapourwave-shell" : ""}`;
  const pageClass = `${isSakuraScene ? "product-detail-sakura" : ""} ${isVapourwave ? "product-detail-vapourwave" : ""}`;

  const tableRows = product.sizeGuide.map((row) => `
    <tr>
      <th scope="row">${row.size}</th>
      <td>${row.chest}</td>
      <td>${row.length}</td>
      <td>${row.sleeve}</td>
    </tr>
  `).join("");

  return pageShell(`
    <main class="page product-detail-page ${pageClass}">
      ${isVapourwave ? vapourwaveHeader() : ""}
      <section class="product-detail-shell">
        <div class="product-detail-media">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" />
        </div>
        <article class="product-detail-info">
          ${breadcrumb(product.name, `<a href="#/shop">Shop</a>`)}
          <p class="section-label product-badge">${product.badge}</p>
          <h1>${product.name}</h1>
          <p class="product-detail-price">${priceLabel(product)}</p>
          <p class="product-subtitle">${product.subtitle}</p>
          <div class="product-selectors" aria-label="Product options">
            <div>
              <span>Color</span>
              <strong>${product.colorway}</strong>
            </div>
            <div>
              <span>Size</span>
              <div class="size-pills">${product.sizeGuide.map((row) => `<button type="button">${row.size}</button>`).join("")}</div>
            </div>
          </div>
          <button class="primary-button product-detail-action" type="button" data-add-product="${product.id}">${actionLabel}</button>
          <p class="helper-copy">Free shipping threshold, processing time, return window, and preorder rules will be finalized here.</p>
        </article>
      </section>
      <section class="product-copy-grid">
        <article>
          <h2>Description</h2>
          ${product.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </article>
        <article>
          <h2>Details</h2>
          <ul>${product.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        </article>
        <article>
          <h2>Materials</h2>
          <ul>${product.materials.map((material) => `<li>${material}</li>`).join("")}</ul>
        </article>
        <article>
          <h2>Size & Fit</h2>
          <p>${product.sizeFit}</p>
          <div class="size-table-wrap">
            <table>
              <caption>Measurements in ${product.sizeGuideUnit}.</caption>
              <thead><tr><th scope="col">Size</th><th scope="col">Chest</th><th scope="col">Length</th><th scope="col">Sleeve</th></tr></thead>
              <tbody>${tableRows}</tbody>
            </table>
          </div>
        </article>
        <article class="product-care">
          <h2>Care</h2>
          <p>${product.care}</p>
        </article>
      </section>
    </main>
  `, { hideHeader: isVapourwave, shellClass });
}

function authAccountSection() {
  if (!state.auth.configured) {
    return `
      <section>
        <h2 class="section-label">Account</h2>
        <div class="auth-panel">
          <h3>Supabase Auth Not Configured</h3>
          <p>Add your Supabase project URL and publishable key in <code>supabase-config.js</code>. This site only needs the public browser key, never the service role key.</p>
        </div>
      </section>
    `;
  }

  if (!state.auth.ready) {
    return `
      <section>
        <h2 class="section-label">Account</h2>
        <div class="auth-panel"><p>Checking account session...</p></div>
      </section>
    `;
  }

  if (state.auth.user) {
    const metadataName = state.auth.user.user_metadata?.display_name || state.auth.user.user_metadata?.full_name || state.settings.name || "";
    const email = state.auth.user.email || state.settings.email || "";
    return `
      <section>
        <h2 class="section-label">Account</h2>
        <div class="auth-panel signed-in-panel">
          <div>
            <h3>Signed In</h3>
            <p>${escapeHtml(email)}</p>
          </div>
          <button class="secondary-button" type="button" data-auth-action="sign-out">Sign Out</button>
        </div>
        <div class="form-grid">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" value="${escapeHtml(metadataName)}" autocomplete="name" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" value="${escapeHtml(email)}" autocomplete="email" />
          </div>
        </div>
        <div class="field password-field">
          <label for="password">New Password</label>
          <input id="password" name="password" type="password" autocomplete="new-password" placeholder="Leave blank to keep current password" />
        </div>
        <div class="auth-actions">
          <button class="primary-button" type="button" data-auth-action="update-profile">Save Account</button>
          <button class="secondary-button" type="button" data-auth-action="reset-password">Send Password Reset</button>
        </div>
        <p class="helper-copy">Profile updates are saved to Supabase Auth. Email and password changes may require confirmation depending on your Supabase project settings.</p>
      </section>
    `;
  }

  return `
    <section>
      <h2 class="section-label">Account</h2>
      <div class="form-grid">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" name="name" value="${escapeHtml(state.settings.name)}" autocomplete="name" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" value="${escapeHtml(state.settings.email)}" autocomplete="email" />
        </div>
      </div>
      <div class="field password-field">
        <label for="password">Password</label>
        <input id="password" name="password" type="password" autocomplete="current-password" />
      </div>
      <div class="auth-actions">
        <button class="primary-button" type="button" data-auth-action="sign-up">Create Account</button>
        <button class="secondary-button" type="button" data-auth-action="sign-in">Sign In</button>
        <button class="secondary-button" type="button" data-auth-action="reset-password">Reset Password</button>
      </div>
      <p class="helper-copy">Accounts are powered by Supabase Auth. If email confirmation is enabled, check your inbox after creating an account.</p>
    </section>
  `;
}

function settingsPage() {
  return pageShell(`
    <main class="page settings-page">
      <section class="contained">
        ${breadcrumb("Settings")}
        <h1 class="display-title">Settings</h1>
        <div class="rule"></div>
        ${authAccountSection()}
        <div class="rule"></div>
        <section>
          <h2 class="section-label">Launch Mode</h2>
          <p class="option-copy">Pre-Launch shows waitlist buttons (limited to 50 per piece). Full-Launch enables full shopping.</p>
          <div class="option-grid">
            ${launchModes.map((option) => optionCard("launch", option, state.settings.launchMode)).join("")}
          </div>
        </section>
        <div class="rule"></div>
        <section>
          <h2 class="section-label">Style</h2>
          <div class="option-grid">
            ${styleOptions.map((option) => optionCard("style", option, state.settings.style)).join("")}
          </div>
        </section>
        ${state.settings.style === "sakura-3d" ? `
          <div class="rule"></div>
          <section>
            <h2 class="section-label">Sakura 3D</h2>
            <p class="option-copy">Choose the product frame treatment for the Sakura 3D shop.</p>
            <div class="option-grid option-grid-three">
              ${sakura3dOptions.map((option) => optionCard("sakura3dVariant", option, state.settings.sakura3dVariant)).join("")}
            </div>
          </section>
        ` : ""}
      </section>
    </main>
  `);
}

function optionCard(type, [id, title, copy], selected) {
  return `
    <button class="option-card ${selected === id ? "selected" : ""}" type="button" data-option-type="${type}" data-option-id="${id}">
      <h3>${title}</h3>
      <p>${copy}</p>
    </button>
  `;
}

function cartPage() {
  const total = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return product && Number.isFinite(product.price) ? sum + product.price * item.qty : sum;
  }, 0);

  const rows = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";
      return `
        <div class="cart-row">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" />
          <div>
            <h3>${product.name}</h3>
            <p>Quantity ${item.qty}</p>
          </div>
          <p>${Number.isFinite(product.price) ? `$${product.price * item.qty}` : "TBD"}</p>
        </div>
      `;
    })
    .join("");

  return pageShell(`
    <main class="page cart-page">
      <section class="narrow">
        ${breadcrumb("Cart")}
        <h1 class="display-title">Shopping Cart</h1>
        ${
          rows
            ? `<div class="cart-list">${rows}</div><div class="cart-total"><span>Total</span><span>$${total}</span></div><button class="primary-button checkout-button" type="button">Checkout Placeholder</button>`
            : `<p class="empty-cart">Your cart is empty for now. The full checkout flow will connect here once the launch mode and product assets are final.</p>`
        }
      </section>
    </main>
  `);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function saveSettings() {
  writeJson("nebula-settings", state.settings);
}

function getSupabaseConfig() {
  const config = window.NEBULA_SUPABASE_CONFIG || {};
  return {
    url: String(config.url || "").trim(),
    publishableKey: String(config.publishableKey || config.anonKey || "").trim(),
  };
}

function syncAuthProfile() {
  if (!state.auth.user) return;
  const name = state.auth.user.user_metadata?.display_name || state.auth.user.user_metadata?.full_name || "";
  if (name) state.settings.name = name;
  if (state.auth.user.email) state.settings.email = state.auth.user.email;
  saveSettings();
}

function initSupabaseAuth() {
  const config = getSupabaseConfig();
  if (!config.url || !config.publishableKey) {
    state.auth.configured = false;
    state.auth.ready = true;
    state.auth.error = "Missing Supabase project URL or publishable key.";
    return;
  }

  if (!window.supabase?.createClient) {
    state.auth.configured = false;
    state.auth.ready = true;
    state.auth.error = "Supabase browser client did not load.";
    return;
  }

  state.auth.configured = true;
  state.auth.client = window.supabase.createClient(config.url, config.publishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });

  state.auth.client.auth.onAuthStateChange((_event, session) => {
    state.auth.session = session;
    state.auth.user = session?.user || null;
    state.auth.ready = true;
    syncAuthProfile();
    render();
  });

  state.auth.client.auth.getSession().then(({ data, error }) => {
    if (error) state.auth.error = error.message;
    state.auth.session = data?.session || null;
    state.auth.user = data?.session?.user || null;
    state.auth.ready = true;
    syncAuthProfile();
    render();
  }).catch((error) => {
    state.auth.error = error.message || "Unable to load Supabase session.";
    state.auth.ready = true;
    render();
  });
}

function formValue(selector) {
  return document.querySelector(selector)?.value.trim() || "";
}

async function handleAuthAction(action) {
  if (!state.auth.client) {
    showToast("Supabase Not Configured");
    return;
  }

  const name = formValue("#name");
  const email = formValue("#email");
  const password = document.querySelector("#password")?.value || "";
  const redirectTo = `${window.location.origin}${window.location.pathname}#/settings`;

  try {
    if (action === "sign-up") {
      if (!email || !password) {
        showToast("Email And Password Required");
        return;
      }
      const { error } = await state.auth.client.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: name },
          emailRedirectTo: redirectTo,
        },
      });
      if (error) throw error;
      showToast("Check Email To Confirm");
    }

    if (action === "sign-in") {
      if (!email || !password) {
        showToast("Email And Password Required");
        return;
      }
      const { error } = await state.auth.client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      showToast("Signed In");
    }

    if (action === "sign-out") {
      const { error } = await state.auth.client.auth.signOut();
      if (error) throw error;
      showToast("Signed Out");
    }

    if (action === "reset-password") {
      if (!email) {
        showToast("Email Required");
        return;
      }
      const { error } = await state.auth.client.auth.resetPasswordForEmail(email, { redirectTo });
      if (error) throw error;
      showToast("Password Email Sent");
    }

    if (action === "update-profile") {
      const updates = { data: { display_name: name } };
      if (email && email !== state.auth.user?.email) updates.email = email;
      if (password) updates.password = password;
      const { error } = await state.auth.client.auth.updateUser(updates);
      if (error) throw error;
      state.settings.name = name;
      state.settings.email = email;
      saveSettings();
      showToast("Account Saved");
    }
  } catch (error) {
    showToast(error.message || "Auth Error");
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function startShopTransition() {
  if (document.body.classList.contains("is-transitioning")) return;
  const existingOverlay = document.querySelector(".shop-transition");
  if (existingOverlay) existingOverlay.remove();

  const overlay = document.createElement("div");
  overlay.className = "shop-transition";
  document.body.appendChild(overlay);
  document.body.classList.add("is-transitioning");

  const transitionVideo = document.createElement("video");
  transitionVideo.className = "shop-transition-video";
  transitionVideo.preload = "auto";
  transitionVideo.setAttribute("playsinline", "");
  transitionVideo.muted = true;
  transitionVideo.src = "assets/final-flash.mp4";
  overlay.appendChild(transitionVideo);

  const revealShop = () => {
    if (window.location.hash !== "#/shop") {
      window.location.hash = "#/shop";
    }
  };
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    revealShop();
    overlay.classList.add("is-fading");
    window.setTimeout(() => {
      overlay.remove();
      document.body.classList.remove("is-transitioning");
    }, 520);
  };
  const armFallback = () => {
    const duration = Number.isFinite(transitionVideo.duration) ? transitionVideo.duration : 3.5;
    window.setTimeout(finish, Math.max(duration * 1000 + 250, 1200));
  };
  let playbackStarted = false;
  let playAttempting = false;
  const transitionStartedAt = Date.now();

  transitionVideo.addEventListener("ended", finish, { once: true });
  transitionVideo.addEventListener("timeupdate", () => {
    if (playbackStarted && transitionVideo.duration && transitionVideo.currentTime >= transitionVideo.duration - 0.12) {
      finish();
    }
  });

  const playFromStart = () => {
    if (playbackStarted || playAttempting || finished) return;
    if (Date.now() - transitionStartedAt > 5000) {
      finish();
      return;
    }
    playAttempting = true;
    if (transitionVideo.readyState > 0 && transitionVideo.currentTime > 0.05) {
      transitionVideo.currentTime = 0;
    }
    transitionVideo.play().then(() => {
      playAttempting = false;
      playbackStarted = true;
      armFallback();
    }).catch(() => {
      playAttempting = false;
      window.setTimeout(playFromStart, 160);
    });
  };

  window.setTimeout(revealShop, 120);
  transitionVideo.addEventListener("canplay", playFromStart, { once: true });
  transitionVideo.load();
  playFromStart();
  window.setTimeout(finish, 5400);
}

function bindEvents() {
  const enterButton = document.querySelector("[data-enter-shop]");
  const entryVideo = document.querySelector("[data-entry-video]");
  if (enterButton && entryVideo) {
    entryVideo.addEventListener("loadedmetadata", () => {
      if (entryVideo.duration > 0.2 && entryVideo.currentTime < 0.08) {
        entryVideo.currentTime = 0.12;
      }
    }, { once: true });

    const triggerEnter = () => {
      if (document.body.classList.contains("is-transitioning")) return;
      enterButton.closest(".home-stage")?.classList.add("is-playing");
      startShopTransition();
    };

    enterButton.addEventListener("click", () => {
      triggerEnter();
    });

    window.addEventListener("keydown", (event) => {
      if (state.route === "home" && event.key === "Enter") {
        triggerEnter();
      }
    });
  }

  document.querySelectorAll("[data-add-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.addProduct;
      if (state.settings.launchMode === "pre") {
        showToast("Added To Waitlist");
        return;
      }

      const existing = state.cart.find((item) => item.id === productId);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({ id: productId, qty: 1 });
      }
      writeJson("nebula-cart", state.cart);
      render();
      showToast("Added To Cart");
    });
  });

  document.querySelectorAll("[data-option-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const { optionType, optionId } = button.dataset;
      if (optionType === "launch") state.settings.launchMode = optionId;
      if (optionType === "style") state.settings.style = optionId;
      if (optionType === "sakura3dVariant") state.settings.sakura3dVariant = optionId;
      saveSettings();
      render();
    });
  });

  document.querySelectorAll("[data-auth-action]").forEach((button) => {
    button.addEventListener("click", () => {
      handleAuthAction(button.dataset.authAction);
    });
  });

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  if (nameInput) {
    nameInput.addEventListener("input", (event) => {
      state.settings.name = event.target.value;
      saveSettings();
    });
  }
  if (emailInput) {
    emailInput.addEventListener("input", (event) => {
      state.settings.email = event.target.value;
      saveSettings();
    });
  }

  const passwordInput = document.querySelector("#password");
  if (passwordInput) {
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !state.auth.user) {
        handleAuthAction("sign-in");
      }
    });
  }
}

function render() {
  const app = document.querySelector("#app");
  if (state.route.startsWith("product/")) {
    app.innerHTML = productDetailPage();
    bindEvents();
    return;
  }

  const pages = {
    home: homePage,
    shop: shopPage,
    about: aboutPage,
    settings: settingsPage,
    cart: cartPage,
    terms: () => legalPage("terms"),
    privacy: () => legalPage("privacy"),
    contact: contactPage,
  };

  app.innerHTML = pages[state.route]();
  bindEvents();
}

window.addEventListener("hashchange", setRoute);
setRoute();
initSupabaseAuth();

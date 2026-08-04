const products = [
  {
    id: "shadow-grin-fleece",
    name: '"Shadow Grin" Fleece',
    shortName: "Shadow Grin",
    osName: "shadow_grin_fleece",
    category: "outerwear",
    categoryLabel: "Fleece jacket",
    colors: ["Purple"],
    colorway: "Purple fleece + dark purple artwork + red lining",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Fleece",
    price: 40,
    image: "assets/shadow-grin-fleece-front.png",
    gallery: [
      "assets/shadow-grin-fleece-front.png",
      "assets/shadow-grin-fleece-back.png",
      "assets/shadow-grin-fleece-model-1.png",
      "assets/shadow-grin-fleece-model-2.png",
      "assets/shadow-grin-fleece-model-3.png",
    ],
    subtitle: "Regular fit jacket made with premium cotton fabric. Zipped front closure and welt pockets on the side.",
    description: [
      "Regular fit jacket made with premium cotton fabric. Zipped front closure and welt pockets on the side.",
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
    category: "outerwear",
    categoryLabel: "Cotton / sherpa hybrid jacket",
    colors: ["White"],
    colorway: "White cotton + white sherpa + grey artwork + purple lining/buttons",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Cotton + Sherpa",
    price: 70,
    image: "assets/pirate-king-hybrid-jacket-front.png",
    gallery: [
      "assets/pirate-king-hybrid-jacket-front.png",
      "assets/pirate-king-hybrid-jacket-back.png",
      "assets/pirate-king-hybrid-jacket-model-1.png",
      "assets/pirate-king-hybrid-jacket-model-2.png",
      "assets/pirate-king-hybrid-jacket-model-3.png",
      "assets/pirate-king-hybrid-jacket-model-4.png",
    ],
    subtitle: "Regular fit jacket made with premium cotton fabric and soft sherpa fabric on collar, sleeve cuffs and bottom hem. Welt pockets, buttoned cuffs and button-front closure. Taffeta inner lining.",
    description: [
      "Regular fit jacket made with premium cotton fabric and soft sherpa fabric on collar, sleeve cuffs and bottom hem. Welt pockets, buttoned cuffs and button-front closure. Taffeta inner lining.",
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
    category: "outerwear",
    categoryLabel: "Cotton panel jacket",
    colors: ["Blue", "Yellow", "Black"],
    colorway: "Black + yellow + blue",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Cotton",
    price: 35,
    image: "assets/son-of-nolan-jacket-front.png",
    gallery: [
      "assets/son-of-nolan-jacket-front.png",
      "assets/son-of-nolan-jacket-back.png",
      "assets/son-of-nolan-jacket-model-1.png",
      "assets/son-of-nolan-jacket-model-2.png",
    ],
    subtitle: "Regular fit color block jacket made with premium cotton fabric. Welt pockets, buttoned cuffs and button-front closure.",
    description: [
      "Regular fit color block jacket made with premium cotton fabric. Welt pockets, buttoned cuffs and button-front closure.",
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
    category: "outerwear",
    categoryLabel: "Corduroy panel jacket",
    colors: ["Purple", "White", "Red"],
    colorway: "Purple + pink + white + black",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Corduroy",
    price: 40,
    image: "assets/legendary-corduroy-jacket-front.png",
    gallery: [
      "assets/legendary-corduroy-jacket-front.png",
      "assets/legendary-corduroy-jacket-back.png",
      "assets/legendary-corduroy-jacket-model-1.png",
      "assets/legendary-corduroy-jacket-model-2.png",
    ],
    subtitle: "Regular fit corduroy jacket. Welt pockets, buttoned cuffs and button-front closure. Taffeta inner lining.",
    description: [
      "Regular fit corduroy jacket. Welt pockets, buttoned cuffs and button-front closure. Taffeta inner lining.",
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
    category: "tops",
    categoryLabel: "Knit crewneck sweater",
    colors: ["Green"],
    colorway: "Dark green knit + multi-color jacquard artwork",
    fit: "Regular menswear fit",
    badge: "Fall/Winter / Knitwear",
    price: 50,
    image: "assets/wild-encounter-knit-sweater-front.png",
    gallery: [
      "assets/wild-encounter-knit-sweater-front.png",
      "assets/wild-encounter-knit-sweater-back.png",
      "assets/wild-encounter-knit-sweater-model-1.png",
      "assets/wild-encounter-knit-sweater-model-2.png",
      "assets/wild-encounter-knit-sweater-model-3.png",
    ],
    subtitle: "Regular fit sweater knit in cotton and wool blend. Woven embroidery on sleeves.",
    description: [
      "Regular fit sweater knit in cotton and wool blend. Woven embroidery on sleeves.",
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
    category: "outerwear",
    categoryLabel: "Sherpa jacket",
    colors: ["Purple"],
    colorway: "Light purple sherpa + black artwork + black lining/binding",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Sherpa",
    price: 50,
    image: "assets/six-paths-sherpa-jacket-front.png",
    gallery: [
      "assets/six-paths-sherpa-jacket-front.png",
      "assets/six-paths-sherpa-jacket-back.png",
      "assets/six-paths-sherpa-jacket-model-1.png",
      "assets/six-paths-sherpa-jacket-model-2.png",
    ],
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
    category: "outerwear",
    categoryLabel: "Embroidered denim jacket",
    colors: ["Blue"],
    colorway: "Blue denim + tonal blue embroidery",
    fit: "Relaxed menswear fit",
    badge: "Fall/Winter / Denim",
    price: 85,
    comingSoon: true,
    image: "assets/eternal-mangekyo-denim-jacket-front.png",
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
  ["vapourwave", "Vapourwave", "Aesthetic OS dreamscape"],
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

// Worldwide country -> currency. Rates are approximate units-per-USD and are for
// display/preview only; real charges happen in USD via Stripe at launch.
// [ISO code, display name, currency code, symbol]
const COUNTRIES = [
  ["US", "United States", "USD", "$"],
  ["CA", "Canada", "CAD", "$"],
  ["GB", "United Kingdom", "GBP", "£"],
  ["AU", "Australia", "AUD", "$"],
  ["NZ", "New Zealand", "NZD", "$"],
  ["IE", "Ireland", "EUR", "€"],
  ["FR", "France", "EUR", "€"],
  ["DE", "Germany", "EUR", "€"],
  ["ES", "Spain", "EUR", "€"],
  ["IT", "Italy", "EUR", "€"],
  ["NL", "Netherlands", "EUR", "€"],
  ["BE", "Belgium", "EUR", "€"],
  ["PT", "Portugal", "EUR", "€"],
  ["AT", "Austria", "EUR", "€"],
  ["GR", "Greece", "EUR", "€"],
  ["FI", "Finland", "EUR", "€"],
  ["CH", "Switzerland", "CHF", "CHF"],
  ["SE", "Sweden", "SEK", "kr"],
  ["NO", "Norway", "NOK", "kr"],
  ["DK", "Denmark", "DKK", "kr"],
  ["PL", "Poland", "PLN", "zł"],
  ["CZ", "Czechia", "CZK", "Kč"],
  ["HU", "Hungary", "HUF", "Ft"],
  ["RO", "Romania", "RON", "lei"],
  ["JP", "Japan", "JPY", "¥"],
  ["CN", "China", "CNY", "¥"],
  ["HK", "Hong Kong", "HKD", "$"],
  ["SG", "Singapore", "SGD", "$"],
  ["KR", "South Korea", "KRW", "₩"],
  ["IN", "India", "INR", "₹"],
  ["TW", "Taiwan", "TWD", "$"],
  ["TH", "Thailand", "THB", "฿"],
  ["MY", "Malaysia", "MYR", "RM"],
  ["ID", "Indonesia", "IDR", "Rp"],
  ["PH", "Philippines", "PHP", "₱"],
  ["VN", "Vietnam", "VND", "₫"],
  ["AE", "United Arab Emirates", "AED", "AED"],
  ["SA", "Saudi Arabia", "SAR", "SAR"],
  ["QA", "Qatar", "QAR", "QAR"],
  ["IL", "Israel", "ILS", "₪"],
  ["TR", "Türkiye", "TRY", "₺"],
  ["ZA", "South Africa", "ZAR", "R"],
  ["NG", "Nigeria", "NGN", "₦"],
  ["EG", "Egypt", "EGP", "E£"],
  ["KE", "Kenya", "KES", "Sh"],
  ["BR", "Brazil", "BRL", "R$"],
  ["MX", "Mexico", "MXN", "$"],
  ["AR", "Argentina", "ARS", "$"],
  ["CL", "Chile", "CLP", "$"],
  ["CO", "Colombia", "COP", "$"],
  ["PK", "Pakistan", "PKR", "₨"],
  ["BD", "Bangladesh", "BDT", "৳"],
  ["LK", "Sri Lanka", "LKR", "₨"],
];

const CURRENCY_RATES = {
  USD: 1, CAD: 1.37, GBP: 0.79, AUD: 1.52, NZD: 1.65, EUR: 0.92, CHF: 0.90,
  SEK: 10.6, NOK: 10.7, DKK: 6.9, PLN: 3.95, CZK: 23, HUF: 360, RON: 4.6,
  JPY: 155, CNY: 7.2, HKD: 7.8, SGD: 1.35, KRW: 1370, INR: 83, TWD: 32,
  THB: 36, MYR: 4.7, IDR: 16000, PHP: 58, VND: 25000, AED: 3.67, SAR: 3.75,
  QAR: 3.64, ILS: 3.7, TRY: 32, ZAR: 18.5, NGN: 1500, EGP: 48, KES: 130,
  BRL: 5.4, MXN: 18, ARS: 900, CLP: 950, COP: 3900, PKR: 278, BDT: 118, LKR: 300,
};

const ZERO_DECIMAL_CURRENCIES = new Set(["JPY", "KRW", "VND", "IDR", "CLP", "COP", "HUF"]);

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
  filters: readJson("nebula-filters", {
    category: "all",
    colors: [],
    priceMin: null,
    priceMax: null,
  }),
  sort: readJson("nebula-sort", "name"),
  filterOpen: false,
  sortOpen: false,
  waitlist: [],
  waitlistEmail: readJson("nebula-waitlist-email", ""),
  waitlistModal: null,
  orders: readJson("nebula-orders", []),
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
if (state.settings.style === "sakura-3d") state.settings.style = "sakura";

// Profile + shipping address live in settings (localStorage now, Supabase-ready later).
state.settings.profile ||= { fullName: "", phone: "" };
state.settings.address ||= { line1: "", line2: "", city: "", region: "", postal: "", country: "" };

// Normalize cart line items to the size-aware shape { id, size, qty }.
state.cart = (state.cart || [])
  .filter((item) => item && item.id)
  .map((item) => ({ id: item.id, size: item.size || null, qty: Math.max(1, Number(item.qty) || 1) }));

const CATEGORY_OPTIONS = [
  ["all", "All Products"],
  ["tops", "Tops"],
  ["bottoms", "Bottoms"],
  ["outerwear", "Outerwear"],
];

const SORT_OPTIONS = [
  ["name", "Name (A–Z)"],
  ["price-asc", "Price: Low to High"],
  ["price-desc", "Price: High to Low"],
];

const COLOR_OPTIONS = [
  ["Black", "#111111"],
  ["Blue", "#2f6fdc"],
  ["Green", "#3aa64f"],
  ["Purple", "#7a4bbf"],
  ["Red", "#d0424a"],
  ["White", "#ffffff"],
  ["Yellow", "#f2c94a"],
];

function saveFilters() { writeJson("nebula-filters", state.filters); }
function saveSort() { writeJson("nebula-sort", state.sort); }

function filteredProducts() {
  const { category, colors, priceMin, priceMax } = state.filters;
  let list = products.slice();
  if (category !== "all") list = list.filter((p) => p.category === category);
  if (colors && colors.length) {
    list = list.filter((p) => (p.colors || []).some((c) => colors.includes(c)));
  }
  if (Number.isFinite(priceMin)) list = list.filter((p) => Number.isFinite(p.price) && p.price >= priceMin);
  if (Number.isFinite(priceMax)) list = list.filter((p) => Number.isFinite(p.price) && p.price <= priceMax);
  const sort = state.sort;
  const cmp = sort === "price-asc"
    ? (a, b) => (a.price ?? Infinity) - (b.price ?? Infinity)
    : sort === "price-desc"
      ? (a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity)
      : (a, b) => a.name.localeCompare(b.name);
  const available = list.filter((p) => !p.comingSoon).sort(cmp);
  const soon = list.filter((p) => p.comingSoon).sort(cmp);
  return [...available, ...soon];
}

function activeFilterCount() {
  const { category, colors, priceMin, priceMax } = state.filters;
  let n = 0;
  if (category !== "all") n++;
  if (colors && colors.length) n++;
  if (Number.isFinite(priceMin) || Number.isFinite(priceMax)) n++;
  return n;
}

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
  return ["home", "shop", "about", "settings", "cart", "checkout", "terms", "privacy", "shipping", "contact"].includes(route) ? route : "home";
}

function setRoute() {
  state.route = routeFromHash();
  render();
  window.scrollTo({ top: 0 });
}

function header() {
  const count = cartCount();
  const active = state.route;

  return `
    <header class="site-header">
      <a class="brand" href="#/home" aria-label="Virdasia home">
        <span class="brand-logo" aria-hidden="true"></span>
        <span class="brand-mark">Virdasia</span>
      </a>
      <nav class="main-nav" aria-label="Primary">
        <a class="nav-link ${active === "shop" || active.startsWith("product/") ? "active" : ""}" href="#/shop">Shop</a>
        <a class="nav-link ${active === "about" ? "active" : ""}" href="#/about">About</a>
      </nav>
      <div class="header-actions">
        <a class="icon-link ${active === "cart" || active === "checkout" ? "active" : ""}" href="#/cart" aria-label="Shopping cart">
          ${icons.bag}
          <span class="cart-count ${count ? "visible" : ""}">${count}</span>
        </a>
        <a class="icon-link ${active === "settings" ? "active" : ""}" href="#/settings" aria-label="Settings">${icons.gear}</a>
      </div>
    </header>
  `;
}

function pageShell(content, options = {}) {
  const headerMarkup = options.hideHeader ? "" : header();
  const footerMarkup = options.hideFooter ? "" : footer();
  let shellClass = options.shellClass || "";
  if (!options.rawShell) {
    const style = state.settings.style;
    if (style === "sakura" || style === "sakura-3d") {
      if (!shellClass.includes("sakura-shell")) shellClass += " sakura-shell";
    } else if (style === "vapourwave") {
      if (!shellClass.includes("vapourwave-shell")) shellClass += " vapourwave-shell";
    }
  }
  return `<div class="site-shell ${shellClass.trim()}">${headerMarkup}${content}${footerMarkup}${waitlistModalMarkup()}<div id="toast" class="toast"></div></div>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <nav class="footer-nav" aria-label="Footer">
        <a href="#/shipping">Shipping & Returns</a>
        <a href="#/terms">Terms Of Service</a>
        <a href="#/privacy">Privacy Policy</a>
        <a href="#/contact">Contact</a>
      </nav>
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

function productSizes(product) {
  return (product.sizeGuide || []).map((row) => row.size);
}

function qtyStepperMarkup(value = 1, scope = "pdp") {
  return `
    <div class="qty-stepper" data-qty-scope="${scope}">
      <button type="button" class="qty-btn" data-qty-dec aria-label="Decrease quantity">−</button>
      <span class="qty-value" data-qty-value>${value}</span>
      <button type="button" class="qty-btn" data-qty-inc aria-label="Increase quantity">+</button>
    </div>
  `;
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => {
    const product = productById(item.id);
    return product && Number.isFinite(product.price) ? sum + product.price * item.qty : sum;
  }, 0);
}

function addToCart(productId, size, qty) {
  const existing = state.cart.find((item) => item.id === productId && item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: productId, size, qty });
  }
  writeJson("nebula-cart", state.cart);
}

function updateCartQty(productId, size, delta) {
  const item = state.cart.find((entry) => entry.id === productId && entry.size === size);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  writeJson("nebula-cart", state.cart);
}

function removeCartItem(productId, size) {
  state.cart = state.cart.filter((entry) => !(entry.id === productId && entry.size === size));
  writeJson("nebula-cart", state.cart);
}

function activeCurrency() {
  const code = state.settings.address?.country;
  const entry = COUNTRIES.find((c) => c[0] === code);
  if (entry && CURRENCY_RATES[entry[2]]) {
    return { currency: entry[2], symbol: entry[3] };
  }
  return { currency: "USD", symbol: "$" };
}

// Convert a USD amount to the active currency and format it.
function money(usd) {
  if (!Number.isFinite(usd)) return usd;
  const { currency, symbol } = activeCurrency();
  const rate = CURRENCY_RATES[currency] || 1;
  const value = usd * rate;
  const decimals = ZERO_DECIMAL_CURRENCIES.has(currency) ? 0 : 2;
  const formatted = value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return currency === "USD" ? `${symbol}${formatted}` : `${symbol}${formatted} ${currency}`;
}

function countrySelectMarkup(id, selectedCode) {
  const options = [`<option value="">Select country</option>`]
    .concat(COUNTRIES.map(([code, name]) =>
      `<option value="${code}"${code === selectedCode ? " selected" : ""}>${name}</option>`
    ));
  return `<select id="${id}" data-country-select autocomplete="country">${options.join("")}</select>`;
}

function priceLabel(product) {
  if (product.comingSoon) return "Coming Soon";
  return Number.isFinite(product.price) ? money(product.price) : "Price TBD";
}

function productUrl(product) {
  return `#/product/${product.id}`;
}

function productRouteId() {
  return state.route.replace(/^product\//, "");
}

function knownWaitlistEmail() {
  return state.auth.user?.email || state.waitlistEmail || "";
}

function waitlistModalMarkup() {
  if (!state.waitlistModal) return "";
  const product = productById(state.waitlistModal.productId);
  if (!product) return "";
  const { size, qty } = state.waitlistModal;
  const signedIn = Boolean(state.auth.user);
  const email = state.auth.user?.email || "";

  const bodyMarkup = signedIn
    ? `
        <p class="modal-copy">Joining as ${escapeHtml(email)}. You'll get a confirmation email now and a reminder when this piece drops, with a priority ordering window.</p>
        <form class="waitlist-form" data-waitlist-form>
          <div class="modal-actions">
            <button class="secondary-button" type="button" data-modal-close>Cancel</button>
            <button class="primary-button" type="submit">Confirm Waitlist</button>
          </div>
        </form>
      `
    : `
        <p class="modal-copy">Waitlisting is reserved for members. Create a free Virdasia account (or sign in) to lock in this piece — we'll email you the moment it drops.</p>
        <div class="modal-actions">
          <button class="secondary-button" type="button" data-modal-close>Cancel</button>
          <button class="primary-button" type="button" data-waitlist-signin>Sign In / Create Account</button>
        </div>
      `;

  return `
    <div class="modal-backdrop" role="presentation" data-modal-close>
      <section class="waitlist-modal" role="dialog" aria-modal="true" aria-labelledby="waitlist-title">
        <button class="modal-close" type="button" aria-label="Close waitlist modal" data-modal-close>×</button>
        <p class="modal-eyebrow">Pre-Launch Waitlist</p>
        <h2 id="waitlist-title">${signedIn ? "Waitlist this item?" : "Members Only"}</h2>
        <p class="modal-product">${product.name}</p>
        <p class="modal-selection">Size ${escapeHtml(size || "—")} · Qty ${qty || 1}</p>
        ${bodyMarkup}
      </section>
    </div>
  `;
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
          poster="nebula-home-video-preview.png"
        >
          <source src="assets/home-animation-v2.mov" type="video/quicktime" />
          <source src="assets/final-flash.mp4" type="video/mp4" />
          <source src="assets/final-flash.mov" type="video/quicktime" />
        </video>
        <div class="home-vignette" aria-hidden="true"></div>
        <a class="home-brand" href="#/home" aria-label="Virdasia home">
          <span class="brand-logo" aria-hidden="true"></span>
          <span class="brand-mark">Virdasia</span>
          </a>
        <button class="shop-enter-button" type="button" data-enter-shop aria-label="Play animation and enter shop">
          <span class="shop-enter-title">Shop</span>
          <span class="shop-enter-kana">ショップ</span>
        </button>
        <p class="press-enter">Press To Enter</p>
      </section>
    </main>
  `, { hideHeader: true, hideFooter: true, shellClass: "home-shell", rawShell: true });
}

function aboutPage() {
  return pageShell(`
    <main class="page about-page">
      <section class="narrow about-inner">
        <p class="eyebrow">About</p>

        <h1 class="display-title about-heading">The Vision</h1>
        <div class="about-copy">
          <p>Virdasia is a place of fantasy. The name is ours, an invented land, somewhere verdant and half-remembered, the kind of world you read your way into as a kid and never fully left.</p>
          <p>Fantasy and fiction isn't just about escaping reality, it's about imagination and expression. Our clothes are for those who want to embody the characters and worlds they love. Not just through embodying them visually but daring to dress bold like they do.</p>
          <p>For those who felt seen by a story in a way they couldn't in the real world. For those who want to wear their childhood heroes out loud, in a language only some people will catch. And lastly for those who dare to dress bold.</p>
        </div>

        <div class="lookbook-row lookbook-row-wide">
          <figure class="lookbook-figure"><img src="assets/lookbook-3.png" alt="Virdasia lookbook" loading="lazy" /></figure>
          <figure class="lookbook-figure"><img src="assets/lookbook-4.jpg" alt="Virdasia lookbook" loading="lazy" /></figure>
        </div>

        <h2 class="display-title about-heading">The Purpose</h2>
        <div class="about-copy">
          <p>The problem was simple: nobody was making this well. Most fandom clothing brands feature loud graphic tees that live in the back of a drawer. In our pieces, fiction is subtly woven into modern fashionable clothes that can be a part of your actual closet. Things you'd actually reach for when you want to look good.</p>
          <p>Each and every Virdasia piece cleverly carries a character, world or fantasy. But you'd never mistake it for a costume. It's a fashion statement first and a love letter second.</p>
        </div>

        <div class="lookbook-row lookbook-row-tall">
          <figure class="lookbook-figure"><img src="assets/lookbook-1.png" alt="Virdasia lookbook" loading="lazy" /></figure>
          <figure class="lookbook-figure"><img src="assets/lookbook-2.png" alt="Virdasia lookbook" loading="lazy" /></figure>
        </div>
      </section>
    </main>
  `);
}

const legalContent = {
  shipping: {
    title: "Shipping & Returns",
    sections: [
      ["Overview", "This draft Shipping & Returns policy explains how Virdasia expects to fulfill orders, handle preorders and waitlisted drops, and process returns or exchanges. Details are placeholders and will be finalized before launch."],
      ["Processing Time", "In-stock pieces are expected to ship within 2-5 business days. Waitlisted and preorder pieces ship after the drop's production window closes; the estimated window will be shown on the product page and in your order confirmation."],
      ["Shipping Rates & Delivery", "Shipping options, rates, and estimated delivery times are calculated at checkout based on destination. Domestic and international carriers, duties, and taxes will be confirmed before launch."],
      ["Order Tracking", "Once an order ships, a tracking number will be emailed to the address on the order. Order status will also appear under Order History in your settings."],
      ["Returns & Exchanges", "We expect to accept returns and exchanges on unworn, unwashed pieces with tags attached within 14 days of delivery. Made-to-order, final-sale, and heavily discounted pieces may be excluded. Final return rules will be posted before launch."],
      ["How To Start A Return", "To start a return or exchange, contact support with your order number. Approved returns will receive instructions and, where offered, a prepaid label. Refunds are issued to the original payment method after the return is received and inspected."],
      ["Damaged Or Incorrect Items", "If a piece arrives damaged, defective, or incorrect, contact support within 7 days of delivery with photos so we can arrange a replacement or refund at no additional cost."],
    ],
  },
};

function legalPage(type) {
  if (legalContent[type]) {
    const { title, sections } = legalContent[type];
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

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms Of Service";
  const sections = isPrivacy
    ? [
        ["Overview", "This draft Privacy Policy explains how Virdasia may collect, use, and protect customer information when visitors use this website, create an account, join a waitlist, place an order, or contact us."],
        ["Information We Collect", "We may collect account details such as name, email address, authentication identifiers, order details, shipping information, support messages, device data, and website usage data."],
        ["How We Use Information", "We use information to provide account access, process orders, manage waitlists, respond to support requests, improve the store experience, prevent fraud, and send transactional or marketing communications where permitted."],
        ["Service Providers", "We may share information with vendors that help run the store, including authentication, payment, shipping, analytics, hosting, email, and customer support providers. They should only use information to provide services to Virdasia."],
        ["Cookies And Local Storage", "The website may use cookies, browser storage, and similar technologies to keep users signed in, remember preferences, maintain carts, measure site performance, and improve product discovery."],
        ["Your Choices", "Customers may request account updates, unsubscribe from marketing emails, or ask for deletion of personal information where applicable law allows. Some order records may need to be retained for legal, tax, or fraud-prevention reasons."],
        ["Security", "We use reasonable technical and organizational safeguards, including Supabase Auth for account access. No online service is completely secure, so this section should be reviewed by counsel before launch."],
      ]
    : [
        ["Overview", "These draft Terms of Service govern access to and use of the Virdasia website, product pages, accounts, waitlists, carts, and related services. They are placeholder terms and should be reviewed before launch."],
        ["Eligibility", "By using this website, customers confirm they can enter into a binding agreement and will provide accurate account, contact, billing, and shipping information."],
        ["Accounts", "Customers are responsible for keeping login credentials secure and for activity that occurs through their account. Virdasia may suspend or close accounts that violate these terms, misuse the site, or create operational risk."],
        ["Products And Availability", "Product descriptions, prices, images, sizing, inventory, launch modes, preorder status, and availability may change. Prototype pages may contain placeholder details until final production information is confirmed."],
        ["Orders, Payments, And Shipping", "Final checkout, payment processing, shipping timelines, taxes, duties, cancellations, and return rules will be shown during checkout or in a dedicated shipping and returns policy before launch."],
        ["Intellectual Property", "The Virdasia name, website design, product photography, product artwork, copy, and other content are owned by Virdasia or its licensors and may not be copied or reused without permission."],
        ["Limitation Of Liability", "To the extent permitted by law, Virdasia is not liable for indirect, incidental, special, or consequential damages arising from use of the website or products. Final legal language should be reviewed by counsel."],
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
            <p>Virdasia Studio</p>
            <p>City, Country placeholder</p>
          </article>
        </div>
      </section>
    </main>
  `);
}

function shopControlsMarkup(isSakuraScene) {
  const barClass = isSakuraScene ? "shop-bar sakura-shop-bar" : "shop-bar";
  const navClass = isSakuraScene ? "sakura-categories" : "shop-categories";
  const controlsClass = isSakuraScene ? "sakura-controls" : "shop-controls";
  const activeCat = state.filters.category;
  const catLinks = CATEGORY_OPTIONS.map(([id, label]) =>
    `<a class="${activeCat === id ? "active" : ""}" href="#" data-filter-category="${id}">${label}</a>`
  ).join("");
  const activeCount = activeFilterCount();
  return `
    <section class="${barClass}" aria-label="Product controls">
      <nav class="${navClass}" aria-label="Product categories">${catLinks}</nav>
      <div class="${controlsClass}">
        <div class="filter-anchor">
          <button type="button" class="filter-toggle" data-toggle-filter aria-expanded="${state.filterOpen ? "true" : "false"}">
            Filter ${activeCount ? `<span class="filter-badge">${activeCount}</span>` : "+"}
          </button>
          ${state.filterOpen ? filterPopoverMarkup() : ""}
        </div>
        <div class="sort-anchor">
          <button type="button" class="sort-toggle" data-toggle-sort aria-expanded="${state.sortOpen ? "true" : "false"}">
            Sort By ${sortArrow()}
          </button>
          ${state.sortOpen ? sortPopoverMarkup() : ""}
        </div>
      </div>
    </section>
  `;
}

function sortArrow() {
  return `<span class="sort-arrow" aria-hidden="true">${state.sortOpen ? "▴" : "▾"}</span>`;
}

function sortPopoverMarkup() {
  return `
    <div class="sort-popover" role="menu">
      ${SORT_OPTIONS.map(([id, label]) =>
        `<button type="button" class="sort-option ${state.sort === id ? "is-active" : ""}" data-sort="${id}" role="menuitemradio" aria-checked="${state.sort === id}">${label}</button>`
      ).join("")}
    </div>
  `;
}

function filterPopoverMarkup() {
  const { colors, priceMin, priceMax } = state.filters;
  const colorChips = COLOR_OPTIONS.map(([name, hex]) => {
    const selected = colors.includes(name);
    return `<button type="button" class="color-chip ${selected ? "is-selected" : ""}" data-filter-color="${name}" aria-pressed="${selected}" title="${name}"><span style="background:${hex}"></span>${name}</button>`;
  }).join("");
  return `
    <div class="filter-popover" role="dialog" aria-label="Filter products">
      <div class="filter-section">
        <h4>Price</h4>
        <div class="filter-price-inputs">
          <label>Min $<input type="number" min="0" data-filter-price-min value="${priceMin ?? ""}" placeholder="0" /></label>
          <label>Max $<input type="number" min="0" data-filter-price-max value="${priceMax ?? ""}" placeholder="Any" /></label>
        </div>
      </div>
      <div class="filter-section">
        <h4>Color</h4>
        <div class="color-chip-grid">${colorChips}</div>
      </div>
      <div class="filter-actions-row">
        <button type="button" class="filter-reset" data-filter-reset>Reset</button>
        <button type="button" class="filter-close" data-filter-close>Done</button>
      </div>
    </div>
  `;
}

function shopPage() {
  const actionLabel = state.settings.launchMode === "pre" ? "Waitlist · 0/50" : "Add To Cart";
  const isSakura = state.settings.style === "sakura";
  const isSakura3d = state.settings.style === "sakura-3d";
  const isVapourwave = state.settings.style === "vapourwave";
  const isSakuraScene = isSakura || isSakura3d;
  const showListingActions = state.settings.launchMode !== "pre";
  const sakura3dVariant = state.settings.sakura3dVariant || "polaroid";
  const shopControls = isVapourwave ? "" : shopControlsMarkup(isSakuraScene);

  return pageShell(`
    <main class="page shop-page ${isSakuraScene ? "shop-page-sakura" : ""} ${isSakura3d ? `shop-page-sakura-3d sakura-3d-${sakura3dVariant}` : ""} ${isVapourwave ? "shop-page-vapourwave" : ""}">
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
                <p class="sakura-subcopy">Statement pieces for those<br />who refuse to blend in.</p>
              </div>
            `
            : isVapourwave
              ? `
                <div class="vapourwave-hero-copy">
                  <h1>Shop</h1>
                  <p class="vapourwave-subcopy">The future is yours. ▸</p>
                </div>
              `
            : `${breadcrumb("All Products", "Shop")}<h1 class="display-title">All Products</h1>`
        }
      </section>
      ${shopControls}
      ${isVapourwave ? vapourwaveLayout(actionLabel) : `
        <section class="product-grid ${isSakura ? "sakura-product-panel" : ""} ${isSakura3d ? `sakura-3d-grid sakura-3d-grid-${sakura3dVariant}` : ""}" aria-label="Products">
          ${filteredProducts().length
            ? filteredProducts().map((product) => productCard(product, actionLabel, isSakura3d ? sakura3dVariant : "", showListingActions)).join("")
            : `<p class="empty-filter">No products match your filters. <button type="button" data-filter-reset class="filter-reset-inline">Reset filters</button></p>`
          }
        </section>
      `}
    </main>
  `, { shellClass: `${isSakuraScene ? "sakura-shell" : ""} ${isVapourwave ? "vapourwave-shell" : ""}` });
}

function vapourwaveHeader() {
  const cartCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
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
        ${state.settings.launchMode === "pre" ? "" : `<a href="#/cart">Cart (${cartCount})</a><a href="#/cart" aria-label="Cart">${icons.bag}</a>`}
      </div>
    </header>
  `;
}

function vapourwaveLayout(actionLabel) {
  const showListingActions = state.settings.launchMode !== "pre";
  const list = filteredProducts();
  const activeCat = state.filters.category;
  const catLinks = CATEGORY_OPTIONS.map(([id, label]) =>
    `<a class="${activeCat === id ? "active" : ""}" href="#" data-filter-category="${id}">${label}${activeCat === id ? "" : ` <span>+</span>`}</a>`
  ).join("");
  const colorChips = COLOR_OPTIONS.map(([name, hex]) => {
    const selected = state.filters.colors.includes(name);
    return `<button type="button" class="vapour-color-chip ${selected ? "is-selected" : ""}" data-filter-color="${name}" title="${name}"><span style="background:${hex}"></span>${name}</button>`;
  }).join("");
  const { priceMin, priceMax } = state.filters;
  const sortLabel = (SORT_OPTIONS.find(([id]) => id === state.sort) || SORT_OPTIONS[0])[1];

  return `
    <section class="vapourwave-shop-surface" aria-label="Vapourwave products">
      <aside class="vapourwave-sidebar">
        <div class="vapour-panel category-panel">
          <h2>Categories_</h2>
          ${catLinks}
        </div>
        <div class="vapour-panel filter-panel">
          <h2>Filter_</h2>
          <div class="vapour-filter-label">Price</div>
          <div class="vapour-price-inputs">
            <label>Min $<input type="number" min="0" data-filter-price-min value="${priceMin ?? ""}" placeholder="0" /></label>
            <label>Max $<input type="number" min="0" data-filter-price-max value="${priceMax ?? ""}" placeholder="Any" /></label>
          </div>
          <div class="vapour-filter-label">Color</div>
          <div class="vapour-color-grid">${colorChips}</div>
          <div class="filter-actions"><button type="button" data-filter-reset>Reset</button></div>
        </div>
        <div class="vapour-panel sort-panel">
          <h2>Sort_</h2>
          ${SORT_OPTIONS.map(([id, label]) =>
            `<button type="button" class="vapour-sort-option ${state.sort === id ? "is-active" : ""}" data-sort="${id}">${label}</button>`
          ).join("")}
        </div>
        <div class="vapour-panel os-panel">
          <h2>Aesthetic_OS</h2>
          <p>Version 2.024<br />© Aesthetic Inc.<br />All rights reserved.</p>
        </div>
      </aside>
      <section class="vapourwave-grid" aria-label="Products">
        ${list.length
          ? list.map((product) => productCard(product, actionLabel, "vapourwave", showListingActions)).join("")
          : `<p class="empty-filter">No products match. <button type="button" data-filter-reset class="filter-reset-inline">Reset</button></p>`
        }
      </section>
    </section>
  `;
}

function productCard(product, actionLabel, frameStyle = "", showAction = true) {
  const isSoon = !!product.comingSoon;
  const imgInner = product.image
    ? `<img src="${product.image}" alt="${escapeHtml(product.name)}" />`
    : `<div class="product-coming-soon">Coming Soon</div>`;
  const imgEl = isSoon && product.image
    ? `${imgInner}<div class="product-soon-overlay"><span>Coming Soon</span></div>`
    : imgInner;
  const canAct = showAction && !isSoon;

  // Coming-soon items are not shoppable and have no preview page — render the
  // media + name as non-clickable elements instead of links.
  const mediaOpen = isSoon
    ? `<div class="product-image-wrap product-soon-wrap">`
    : `<a class="product-image-wrap product-card-link" href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}">`;
  const mediaClose = isSoon ? `</div>` : `</a>`;
  const nameEl = isSoon
    ? `<span class="product-name product-name-soon">${product.name}</span>`
    : `<a class="product-name product-card-link" href="${productUrl(product)}">${product.name}</a>`;

  if (frameStyle === "vapourwave") {
    return `
      <article class="product-card vapourwave-card${isSoon ? " is-coming-soon" : ""}">
        <div class="vapour-window-bar">
          <span class="vapour-window-title">"${product.osName}"</span>
          <span class="vapour-window-controls"><i>−</i><i>□</i><i>×</i></span>
        </div>
        <div class="vapour-window-body">
          ${mediaOpen}
            ${imgEl}
          ${mediaClose}
        </div>
        <div class="vapour-status-bar">
          <strong class="vapour-status-price">${priceLabel(product)}</strong>
          ${canAct ? `<a class="vapour-card-cta" href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}">${icons.bag}</a>` : `<i></i>`}
        </div>
      </article>
    `;
  }

  if (frameStyle) {
    const gameTitle = `${product.shortName.split(" ")[0]}.exe`;
    const frameHeader = frameStyle === "game"
      ? `<div class="game-window-bar"><span class="game-window-icon"></span><strong>"${gameTitle}"</strong><span class="game-window-controls"><i>−</i><i>□</i><i>×</i></span></div>`
      : frameStyle === "glass"
        ? `<div class="sakura-frame-label">✦ ✦ ✦ Aesthetic ✦ ✦ ✦</div>`
        : "";
    const frameFooter = frameStyle === "game"
      ? `<div class="game-window-footer"><span><i></i>Start</span><strong>Aesthetic</strong><span>◉ 12:00 PM</span></div>`
      : frameStyle === "polaroid"
        ? `<div class="polaroid-footer"><strong>Aesthetic</strong><span></span><i>◉</i></div>`
        : "";

    return `
      <article class="product-card sakura-3d-card sakura-3d-card-${frameStyle}${isSoon ? " is-coming-soon" : ""}">
        ${frameHeader}
        <div class="sakura-3d-frame">
          ${mediaOpen}
            ${imgEl}
          ${mediaClose}
          ${frameFooter}
        </div>
        <div class="product-meta">
          ${nameEl}
          <div class="product-price">${priceLabel(product)}</div>
          ${canAct ? `<a class="product-action" href="${productUrl(product)}">${state.settings.launchMode === "pre" ? "Waitlist" : "Select Options"}</a>` : ""}
        </div>
      </article>
    `;
  }

  return `
    <article class="product-card${isSoon ? " is-coming-soon" : ""}">
      ${mediaOpen}
        ${imgEl}
      ${mediaClose}
      <div class="product-meta">
        ${nameEl}
        <div class="product-price">${priceLabel(product)}</div>
        ${canAct ? `<a class="product-action" href="${productUrl(product)}">${state.settings.launchMode === "pre" ? "Waitlist" : "Select Options"}</a>` : ""}
      </div>
    </article>
  `;
}

function productDetailPage() {
  const product = productById(productRouteId());
  // Coming-soon pieces have no preview page — treat a direct link like a
  // not-yet-available notice and send the visitor back to the shop.
  if (!product || product.comingSoon) {
    const soon = product && product.comingSoon;
    return pageShell(`
      <main class="page product-detail-page">
        <section class="narrow">
          ${breadcrumb(soon ? "Coming Soon" : "Product Not Found", `<a href="#/shop">Shop</a>`)}
          <h1 class="display-title">${soon ? escapeHtml(product.name) : "Product Not Found"}</h1>
          <p class="empty-cart">${soon ? "This piece hasn't dropped yet. Check back soon." : "That piece is not in the current catalog."}</p>
          <a class="primary-button inline-button" href="#/shop">Back To Shop</a>
        </section>
      </main>
    `);
  }

  const actionLabel = state.settings.launchMode === "pre" ? "Waitlist · 0/50" : "Add To Cart";
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
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4);
  const detailActionLabel = state.settings.launchMode === "pre" ? "Waitlist · 0/50" : "Add To Cart";
  const secondaryDescription = product.id === "pirate-king-hybrid-jacket"
    ? [...product.description, "The purple buttons and lining add a hidden pop of color, making the jacket feel more designed without overcrowding the front of the garment."]
    : product.description;

  return pageShell(`
    <main class="page product-detail-page ${pageClass}">
      <div class="product-detail-breadcrumb">
        ${breadcrumb(product.name, `<a href="#/shop">Shop</a>`)}
      </div>
      <div class="detail-panel detail-panel-main">
      <section class="product-detail-shell">
        <div class="product-detail-media">
          ${product.comingSoon
            ? `<div class="product-coming-soon product-coming-soon-large">Coming Soon</div>`
            : `
              <img class="product-detail-hero" src="${(product.gallery && product.gallery[0]) || product.image}" alt="${escapeHtml(product.name)}" />
              ${product.gallery && product.gallery.length > 1 ? `
                <div class="product-detail-gallery">
                  ${product.gallery.map((src, i) => `
                    <button class="product-gallery-thumb${i === 0 ? " is-active" : ""}" type="button" data-gallery-src="${src}" aria-label="View image ${i + 1}">
                      <img src="${src}" alt="${escapeHtml(product.name)} ${i + 1}" />
                    </button>
                  `).join("")}
                </div>
              ` : ""}
            `}
          <p class="section-label product-badge">${product.badge}</p>
        </div>
        <article class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-subtitle">${product.subtitle}</p>
          <p class="product-detail-price">${priceLabel(product)}</p>
          ${product.comingSoon ? "" : `
          <div class="product-size-row">
            <span>Size</span>
            <button class="size-guide-link" type="button" data-scroll-target="size-guide">Size Guide</button>
          </div>
          <div class="size-pills" data-size-pills>${productSizes(product).map((size) => `<button type="button" class="size-pill" data-size="${size}">${size}</button>`).join("")}</div>
          <div class="product-qty-row">
            <span>Quantity</span>
            ${qtyStepperMarkup(1, "pdp")}
          </div>
          <button class="primary-button product-detail-action" type="button" data-add-product="${product.id}">${detailActionLabel}</button>
          `}
          <section class="product-accordions" aria-label="Product information">
            <details>
              <summary>Details <span aria-hidden="true">⌄</span></summary>
              <ul>${product.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </details>
            <details>
              <summary>Materials & Construction <span aria-hidden="true">⌄</span></summary>
              <ul>${product.materials.map((material) => `<li>${material}</li>`).join("")}</ul>
            </details>
            <details>
              <summary>Size & Fit <span aria-hidden="true">⌄</span></summary>
              <p>${product.sizeFit}</p>
            </details>
            <details>
              <summary>Care <span aria-hidden="true">⌄</span></summary>
              <p>${product.care}</p>
            </details>
            <details>
              <summary>Shipping & Returns <span aria-hidden="true">⌄</span></summary>
              <p>Shipping, preorder timing, and return details will be finalized before launch.</p>
            </details>
          </section>
        </article>
      </section>
      </div>
      <div class="detail-panel detail-panel-size">
      <section id="size-guide" class="product-size-guide">
        <h2>Size Guide</h2>
        <p>Measurements in ${product.sizeGuideUnit === "in" ? "inches" : "centimeters"}. Approximate; may vary slightly with production.</p>
        <div class="size-table-wrap">
          <table>
            <thead><tr><th scope="col">Size</th><th scope="col">Chest</th><th scope="col">Length</th><th scope="col">Sleeve</th></tr></thead>
            <tbody>${tableRows}</tbody>
          </table>
        </div>
      </section>
      </div>
      <div class="detail-panel detail-panel-related">
      <section class="related-products" aria-label="You may also like">
        <h2>You may also like</h2>
        <div class="related-product-grid">
          ${relatedProducts.map((item) => `
            <article class="related-product-card">
              <a href="${productUrl(item)}" aria-label="View ${escapeHtml(item.name)}">
                <img src="${item.image}" alt="${escapeHtml(item.name)}" />
                <strong>${item.name}</strong>
                <span>${priceLabel(item)}</span>
              </a>
            </article>
          `).join("")}
        </div>
      </section>
      </div>
    </main>
  `, { shellClass });
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

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return "";
  }
}

function profileSection() {
  const profile = state.settings.profile || {};
  const addr = state.settings.address || {};
  return `
    <section>
      <h2 class="section-label">Profile & Shipping</h2>
      <p class="option-copy">Saved here on this device for now. Once accounts are connected, this will sync to your Virdasia account and prefill checkout.</p>
      <div class="form-grid">
        <div class="field">
          <label for="pf-fullname">Full Name</label>
          <input id="pf-fullname" value="${escapeHtml(profile.fullName || "")}" autocomplete="name" />
        </div>
        <div class="field">
          <label for="pf-phone">Phone</label>
          <input id="pf-phone" value="${escapeHtml(profile.phone || "")}" autocomplete="tel" />
        </div>
        <div class="field field-wide">
          <label for="pf-line1">Address</label>
          <input id="pf-line1" value="${escapeHtml(addr.line1 || "")}" autocomplete="address-line1" placeholder="Street address" />
        </div>
        <div class="field field-wide">
          <label for="pf-line2">Apartment, suite, etc. (optional)</label>
          <input id="pf-line2" value="${escapeHtml(addr.line2 || "")}" autocomplete="address-line2" />
        </div>
        <div class="field">
          <label for="pf-city">City</label>
          <input id="pf-city" value="${escapeHtml(addr.city || "")}" autocomplete="address-level2" />
        </div>
        <div class="field">
          <label for="pf-region">State / Province</label>
          <input id="pf-region" value="${escapeHtml(addr.region || "")}" autocomplete="address-level1" />
        </div>
        <div class="field">
          <label for="pf-postal">ZIP / Postal Code</label>
          <input id="pf-postal" value="${escapeHtml(addr.postal || "")}" autocomplete="postal-code" />
        </div>
        <div class="field">
          <label for="pf-country">Country</label>
          ${countrySelectMarkup("pf-country", addr.country || "")}
        </div>
      </div>
      <div class="auth-actions">
        <button class="primary-button" type="button" data-save-profile>Save Details</button>
      </div>
    </section>
  `;
}

function orderHistorySection() {
  const orders = state.orders || [];
  const body = orders.length
    ? orders.slice().reverse().map((order) => `
        <article class="order-card">
          <div class="order-card-head">
            <strong>Order ${escapeHtml(order.id || "")}</strong>
            <span>${formatDate(order.createdAt)}</span>
          </div>
          <div class="order-card-items">
            ${(order.items || []).map((item) => {
              const product = productById(item.id);
              const name = product ? product.name : item.id;
              return `<p>${name} — Size ${escapeHtml(item.size || "One size")} · Qty ${item.qty}</p>`;
            }).join("")}
          </div>
          <div class="order-card-foot">
            <span class="order-status">${escapeHtml(order.status || "Processing")}</span>
            <strong>${money(order.total ?? 0)}</strong>
          </div>
        </article>
      `).join("")
    : `<p class="settings-empty">No orders yet. Your purchases will show up here once checkout goes live.</p>`;
  return `
    <section>
      <h2 class="section-label">Order History</h2>
      <div class="order-list">${body}</div>
    </section>
  `;
}

function waitlistSection() {
  const entries = state.waitlist || [];
  let body;
  if (!state.auth.user) {
    body = `<p class="settings-empty">Sign in to your Virdasia account to see and manage your waitlist.</p>`;
  } else if (!entries.length) {
    body = `<p class="settings-empty">You are not on any waitlists yet. Join one from a product page in Pre-Launch mode.</p>`;
  } else {
    body = entries.map((entry) => {
      const product = productById(entry.productId);
      const name = product ? product.name : (entry.productName || entry.productId);
      const meta = [`Size ${escapeHtml(entry.size || "Any")}`, `Qty ${entry.qty || 1}`];
      return `
        <div class="waitlist-entry">
          <div>
            <strong>${name}</strong>
            <span>${meta.join(" · ")}</span>
          </div>
          <button type="button" class="secondary-button waitlist-leave" data-leave-waitlist="${escapeHtml(entry.id || "")}">Leave</button>
        </div>
      `;
    }).join("");
  }
  return `
    <section>
      <h2 class="section-label">Waitlisted Items</h2>
      <div class="waitlist-list">${body}</div>
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
        ${profileSection()}
        <div class="rule"></div>
        ${orderHistorySection()}
        <div class="rule"></div>
        ${waitlistSection()}
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
  const total = cartTotal();

  const rows = state.cart
    .map((item) => {
      const product = productById(item.id);
      if (!product) return "";
      const lineTotal = Number.isFinite(product.price) ? money(product.price * item.qty) : "TBD";
      return `
        <div class="cart-row">
          <a href="${productUrl(product)}" aria-label="View ${escapeHtml(product.name)}"><img src="${product.image}" alt="${escapeHtml(product.name)}" /></a>
          <div class="cart-row-info">
            <h3>${product.name}</h3>
            <p class="cart-row-size">Size ${escapeHtml(item.size || "One size")}</p>
            <div class="cart-row-controls">
              <div class="qty-stepper cart-qty" data-cart-id="${product.id}" data-cart-size="${escapeHtml(item.size || "")}">
                <button type="button" class="qty-btn" data-cart-dec aria-label="Decrease quantity">−</button>
                <span class="qty-value">${item.qty}</span>
                <button type="button" class="qty-btn" data-cart-inc aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="cart-remove" data-cart-remove data-cart-id="${product.id}" data-cart-size="${escapeHtml(item.size || "")}">Remove</button>
            </div>
          </div>
          <p class="cart-row-price">${lineTotal}</p>
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
            ? `<div class="cart-list">${rows}</div>
               <div class="cart-total"><span>Subtotal</span><span>${money(total)}</span></div>
               <p class="cart-note">Shipping and taxes are calculated at checkout.</p>
               <a class="primary-button checkout-button" href="#/checkout">Proceed To Checkout</a>`
            : `<p class="empty-cart">Your cart is empty. <a href="#/shop">Browse the shop</a> to add pieces — pick a size and quantity on any product page.</p>`
        }
      </section>
    </main>
  `);
}

function checkoutPage() {
  if (!state.cart.length) {
    return pageShell(`
      <main class="page checkout-page">
        <section class="narrow">
          ${breadcrumb("Checkout", `<a href="#/cart">Cart</a>`)}
          <h1 class="display-title">Checkout</h1>
          <p class="empty-cart">Your cart is empty. <a href="#/shop">Browse the shop</a> to add pieces first.</p>
        </section>
      </main>
    `);
  }

  const total = cartTotal();
  const addr = state.settings.address || {};
  const profile = state.settings.profile || {};
  const contactEmail = state.auth.user?.email || state.settings.email || "";
  const contactName = profile.fullName || state.settings.name || "";

  const summaryRows = state.cart.map((item) => {
    const product = productById(item.id);
    if (!product) return "";
    const line = Number.isFinite(product.price) ? money(product.price * item.qty) : "TBD";
    return `
      <div class="summary-row">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" />
        <div>
          <strong>${product.name}</strong>
          <span>Size ${escapeHtml(item.size || "One size")} · Qty ${item.qty}</span>
        </div>
        <span class="summary-line-price">${line}</span>
      </div>
    `;
  }).join("");

  return pageShell(`
    <main class="page checkout-page">
      <section class="checkout-wrap">
        <div class="checkout-main">
          ${breadcrumb("Checkout", `<a href="#/cart">Cart</a>`)}
          <h1 class="display-title">Checkout</h1>

          <section class="checkout-section">
            <h2 class="section-label">Contact</h2>
            <div class="form-grid">
              <div class="field">
                <label for="co-name">Full Name</label>
                <input id="co-name" name="co-name" value="${escapeHtml(contactName)}" autocomplete="name" />
              </div>
              <div class="field">
                <label for="co-email">Email</label>
                <input id="co-email" name="co-email" type="email" value="${escapeHtml(contactEmail)}" autocomplete="email" />
              </div>
            </div>
          </section>

          <section class="checkout-section">
            <h2 class="section-label">Shipping Address</h2>
            <div class="form-grid">
              <div class="field field-wide">
                <label for="co-line1">Address</label>
                <input id="co-line1" value="${escapeHtml(addr.line1 || "")}" autocomplete="address-line1" placeholder="Street address" />
              </div>
              <div class="field field-wide">
                <label for="co-line2">Apartment, suite, etc. (optional)</label>
                <input id="co-line2" value="${escapeHtml(addr.line2 || "")}" autocomplete="address-line2" />
              </div>
              <div class="field">
                <label for="co-city">City</label>
                <input id="co-city" value="${escapeHtml(addr.city || "")}" autocomplete="address-level2" />
              </div>
              <div class="field">
                <label for="co-region">State / Province</label>
                <input id="co-region" value="${escapeHtml(addr.region || "")}" autocomplete="address-level1" />
              </div>
              <div class="field">
                <label for="co-postal">ZIP / Postal Code</label>
                <input id="co-postal" value="${escapeHtml(addr.postal || "")}" autocomplete="postal-code" />
              </div>
              <div class="field">
                <label for="co-country">Country</label>
                ${countrySelectMarkup("co-country", addr.country || "")}
              </div>
            </div>
          </section>

          <section class="checkout-section">
            <h2 class="section-label">Payment</h2>
            <div class="payment-placeholder">
              <p>Card payments are not connected yet. Stripe checkout will be enabled before launch.</p>
            </div>
          </section>

          <button class="primary-button place-order-button" type="button" disabled aria-disabled="true">Place Order</button>
          <p class="checkout-disabled-note">Ordering is disabled until Stripe payments and accounts are connected.</p>
        </div>

        <aside class="checkout-summary">
          <h2 class="section-label">Order Summary</h2>
          <div class="summary-rows">${summaryRows}</div>
          <div class="summary-totals">
            <div class="summary-total-row"><span>Subtotal</span><span>${money(total)}</span></div>
            <div class="summary-total-row muted"><span>Shipping</span><span>Calculated next</span></div>
            <div class="summary-total-row summary-grand"><span>Total</span><span>${money(total)}</span></div>
          </div>
          ${activeCurrency().currency !== "USD" ? `<p class="summary-fx-note">Approximate conversion from USD. You'll be charged in USD at checkout.</p>` : ""}
        </aside>
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
    refreshWaitlist();
  });

  state.auth.client.auth.getSession().then(({ data, error }) => {
    if (error) state.auth.error = error.message;
    state.auth.session = data?.session || null;
    state.auth.user = data?.session?.user || null;
    state.auth.ready = true;
    syncAuthProfile();
    render();
    refreshWaitlist();
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

function openWaitlistModal(productId, size = null, qty = 1) {
  state.waitlistModal = { productId, size, qty };
  render();
}

function closeWaitlistModal() {
  state.waitlistModal = null;
  render();
}

// Load the signed-in user's waitlist rows from Supabase into state.waitlist.
async function loadWaitlist() {
  if (!state.auth.client || !state.auth.user) {
    state.waitlist = [];
    return;
  }
  const { data, error } = await state.auth.client
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    state.auth.error = error.message;
    return;
  }
  state.waitlist = (data || []).map((row) => ({
    id: row.id,
    productId: row.product_id,
    productName: row.product_name,
    email: row.email,
    size: row.size,
    qty: row.qty,
    createdAt: row.created_at,
  }));
}

function refreshWaitlist() {
  loadWaitlist().then(render).catch(() => render());
}

// Insert a waitlist entry for the signed-in user. Returns { ok, duplicate }.
async function addWaitlistEntry(productId, size, qty) {
  if (!state.auth.client || !state.auth.user) return { ok: false };
  const product = productById(productId);
  const { error } = await state.auth.client.from("waitlist").insert({
    user_id: state.auth.user.id,
    email: state.auth.user.email,
    product_id: productId,
    product_name: product ? product.name : productId,
    size,
    qty,
  });
  if (error) {
    // 23505 = unique_violation -> already waitlisted for this product+size.
    if (error.code === "23505") return { ok: false, duplicate: true };
    return { ok: false, message: error.message };
  }
  return { ok: true };
}

async function removeWaitlistEntry(id) {
  if (!state.auth.client || !state.auth.user) return;
  const { error } = await state.auth.client.from("waitlist").delete().eq("id", id);
  if (error) {
    showToast("Could Not Remove");
    return;
  }
  await loadWaitlist();
  render();
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
  transitionVideo.src = "assets/home-animation-v2.mov";
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
      entryVideo.pause();
      entryVideo.currentTime = 0;
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

  document.querySelectorAll("[data-filter-category]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      state.filters.category = el.dataset.filterCategory;
      saveFilters();
      render();
    });
  });

  document.querySelectorAll("[data-toggle-filter]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      state.filterOpen = !state.filterOpen;
      state.sortOpen = false;
      render();
    });
  });

  document.querySelectorAll("[data-toggle-sort]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      state.sortOpen = !state.sortOpen;
      state.filterOpen = false;
      render();
    });
  });

  document.querySelectorAll("[data-sort]").forEach((el) => {
    el.addEventListener("click", () => {
      state.sort = el.dataset.sort;
      state.sortOpen = false;
      saveSort();
      render();
    });
  });

  document.querySelectorAll("[data-filter-color]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      const color = el.dataset.filterColor;
      const set = new Set(state.filters.colors);
      set.has(color) ? set.delete(color) : set.add(color);
      state.filters.colors = [...set];
      saveFilters();
      render();
    });
  });

  document.querySelectorAll("[data-filter-price-min]").forEach((el) => {
    el.addEventListener("change", () => {
      const v = el.value.trim();
      state.filters.priceMin = v === "" ? null : Number(v);
      saveFilters();
      render();
    });
  });

  document.querySelectorAll("[data-filter-price-max]").forEach((el) => {
    el.addEventListener("change", () => {
      const v = el.value.trim();
      state.filters.priceMax = v === "" ? null : Number(v);
      saveFilters();
      render();
    });
  });

  document.querySelectorAll("[data-filter-reset]").forEach((el) => {
    el.addEventListener("click", () => {
      state.filters = { category: "all", colors: [], priceMin: null, priceMax: null };
      saveFilters();
      render();
    });
  });

  document.querySelectorAll("[data-filter-close]").forEach((el) => {
    el.addEventListener("click", () => {
      state.filterOpen = false;
      render();
    });
  });

  if ((state.filterOpen || state.sortOpen) && !window.__nebulaPopoverDismiss) {
    window.__nebulaPopoverDismiss = true;
    document.addEventListener("click", (event) => {
      if (event.target.closest(".filter-anchor") || event.target.closest(".sort-anchor")) return;
      if (state.filterOpen || state.sortOpen) {
        state.filterOpen = false;
        state.sortOpen = false;
        render();
      }
    });
  }

  // Size pill selection (product detail page) — toggle within its group.
  document.querySelectorAll("[data-size-pills]").forEach((group) => {
    group.querySelectorAll(".size-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        group.querySelectorAll(".size-pill").forEach((p) => p.classList.remove("is-selected"));
        pill.classList.add("is-selected");
      });
    });
  });

  // Quantity steppers used on the product page and waitlist modal (DOM-only).
  document.querySelectorAll(".qty-stepper[data-qty-scope]").forEach((stepper) => {
    const valueEl = stepper.querySelector("[data-qty-value]");
    const clamp = (n) => Math.min(10, Math.max(1, n));
    stepper.querySelector("[data-qty-dec]")?.addEventListener("click", () => {
      valueEl.textContent = clamp((Number(valueEl.textContent) || 1) - 1);
    });
    stepper.querySelector("[data-qty-inc]")?.addEventListener("click", () => {
      valueEl.textContent = clamp((Number(valueEl.textContent) || 1) + 1);
    });
  });

  document.querySelectorAll("[data-add-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.addProduct;
      const scope = button.closest(".product-detail-info") || document;
      const size = scope.querySelector(".size-pill.is-selected")?.dataset.size || null;
      const qty = Math.max(1, Number(scope.querySelector("[data-qty-value]")?.textContent) || 1);
      if (!size) {
        showToast("Select A Size");
        return;
      }
      if (state.settings.launchMode === "pre") {
        openWaitlistModal(productId, size, qty);
        return;
      }
      addToCart(productId, size, qty);
      render();
      showToast("Added To Cart");
    });
  });

  // Cart line editing.
  document.querySelectorAll(".cart-qty").forEach((stepper) => {
    const id = stepper.dataset.cartId;
    const size = stepper.dataset.cartSize || null;
    stepper.querySelector("[data-cart-dec]")?.addEventListener("click", () => {
      updateCartQty(id, size, -1);
      render();
    });
    stepper.querySelector("[data-cart-inc]")?.addEventListener("click", () => {
      updateCartQty(id, size, 1);
      render();
    });
  });

  document.querySelectorAll("[data-cart-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      removeCartItem(button.dataset.cartId, button.dataset.cartSize || null);
      render();
      showToast("Removed From Cart");
    });
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const galleryThumbs = document.querySelectorAll("[data-gallery-src]");
  const activateThumb = (thumb) => {
    const hero = document.querySelector(".product-detail-hero");
    if (hero) hero.src = thumb.dataset.gallerySrc;
    galleryThumbs.forEach((t) => t.classList.remove("is-active"));
    thumb.classList.add("is-active");
    thumb.scrollIntoView({ block: "nearest", behavior: "smooth" });
  };
  galleryThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => activateThumb(thumb));
  });
  if (galleryThumbs.length && !window.__nebulaGalleryKeys) {
    window.__nebulaGalleryKeys = true;
    document.addEventListener("keydown", (event) => {
      const thumbs = document.querySelectorAll(".product-gallery-thumb");
      if (!thumbs.length) return;
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
      const tag = event.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) return;
      event.preventDefault();
      const list = Array.from(thumbs);
      const currentIdx = list.findIndex((t) => t.classList.contains("is-active"));
      const idx = currentIdx < 0 ? 0 : currentIdx;
      const next = event.key === "ArrowDown"
        ? list[(idx + 1) % list.length]
        : list[(idx - 1 + list.length) % list.length];
      activateThumb(next);
    });
  }

  document.querySelectorAll("[data-modal-close]").forEach((control) => {
    control.addEventListener("click", (event) => {
      if (event.target === control || control.matches("button")) {
        closeWaitlistModal();
      }
    });
  });

  const waitlistSignin = document.querySelector("[data-waitlist-signin]");
  if (waitlistSignin) {
    waitlistSignin.addEventListener("click", () => {
      closeWaitlistModal();
      window.location.hash = "#/settings";
    });
  }

  const waitlistForm = document.querySelector("[data-waitlist-form]");
  if (waitlistForm) {
    waitlistForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const modal = state.waitlistModal;
      if (!modal?.productId) return;
      if (!state.auth.user) {
        showToast("Sign In To Waitlist");
        return;
      }
      const submitBtn = waitlistForm.querySelector('button[type="submit"]');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Adding…"; }
      const result = await addWaitlistEntry(modal.productId, modal.size || null, modal.qty || 1);
      closeWaitlistModal();
      if (result.ok) {
        await loadWaitlist();
        render();
        showToast("Added To Waitlist");
      } else if (result.duplicate) {
        showToast("Already On Your Waitlist");
      } else {
        showToast(result.message || "Could Not Add");
      }
    });
  }

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

  document.querySelectorAll("[data-leave-waitlist]").forEach((button) => {
    button.addEventListener("click", () => {
      removeWaitlistEntry(button.dataset.leaveWaitlist);
      showToast("Left Waitlist");
    });
  });

  // Checkout: changing country re-prices the summary in that country's currency.
  const checkoutCountry = document.querySelector("#co-country");
  if (checkoutCountry) {
    checkoutCountry.addEventListener("change", () => {
      const val = (id) => document.querySelector(id)?.value.trim() || "";
      const name = val("#co-name");
      const email = val("#co-email");
      if (name) state.settings.profile = { ...state.settings.profile, fullName: name };
      if (email) state.settings.email = email;
      state.settings.address = {
        line1: val("#co-line1"), line2: val("#co-line2"), city: val("#co-city"),
        region: val("#co-region"), postal: val("#co-postal"), country: val("#co-country"),
      };
      saveSettings();
      render();
    });
  }

  const saveProfileButton = document.querySelector("[data-save-profile]");
  if (saveProfileButton) {
    saveProfileButton.addEventListener("click", () => {
      const val = (id) => document.querySelector(id)?.value.trim() || "";
      state.settings.profile = {
        fullName: val("#pf-fullname"),
        phone: val("#pf-phone"),
      };
      state.settings.address = {
        line1: val("#pf-line1"),
        line2: val("#pf-line2"),
        city: val("#pf-city"),
        region: val("#pf-region"),
        postal: val("#pf-postal"),
        country: val("#pf-country"),
      };
      saveSettings();
      showToast("Details Saved");
    });
  }

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
    checkout: checkoutPage,
    terms: () => legalPage("terms"),
    privacy: () => legalPage("privacy"),
    shipping: () => legalPage("shipping"),
    contact: contactPage,
  };

  app.innerHTML = pages[state.route]();
  bindEvents();
}

window.addEventListener("hashchange", setRoute);
setRoute();
initSupabaseAuth();

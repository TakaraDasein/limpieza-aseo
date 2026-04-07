import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { y as maybeRenderHead, a4 as addAttribute, Q as renderTemplate, F as Fragment } from './sequence_Cz06ISpH.mjs';
import { r as renderComponent } from './entrypoint_CZKlOY0o.mjs';
import { $ as $$Layout } from './Layout_CFVY-uUI.mjs';
import { $ as $$Navbar, a as $$Footer, b as $$WhatsAppButton } from './WhatsAppButton_e4khPAkd.mjs';
import { r as renderScript } from './script_C0wet-lX.mjs';
import { d as db, p as products, c as categories } from './index_BO5qdVM-.mjs';

const $$CategoryHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CategoryHero;
  const { categories } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-container to-secondary" id="catalog-hero" data-astro-cid-vnmiil5a> <!-- Animated background shapes --> <div class="absolute inset-0 overflow-hidden" data-astro-cid-vnmiil5a> <div class="absolute top-20 left-10 w-72 h-72 bg-secondary-fixed/20 rounded-full blur-3xl animate-pulse" data-astro-cid-vnmiil5a></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;" data-astro-cid-vnmiil5a></div> </div> <div class="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 relative z-10" data-astro-cid-vnmiil5a> <div class="text-center mb-16" data-astro-cid-vnmiil5a> <h1 class="font-headline text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tighter" data-astro-cid-vnmiil5a>
Nuestro Catálogo
</h1> <p class="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto" data-astro-cid-vnmiil5a>
Explora nuestra colección completa de productos de limpieza profesional
</p> </div> <!-- Category Grid --> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6" data-astro-cid-vnmiil5a> ${categories.map((category, index) => renderTemplate`<button${addAttribute(`category-card group relative p-6 md:p-8 bg-white rounded-2xl border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${index === 0 ? "active-category" : ""}`, "class")}${addAttribute(category.id, "data-category")} data-astro-cid-vnmiil5a> <div class="flex flex-col items-center gap-4" data-astro-cid-vnmiil5a> <div class="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-astro-cid-vnmiil5a> <span class="material-symbols-outlined text-4xl md:text-5xl text-primary" data-astro-cid-vnmiil5a>${category.icon}</span> </div> <h3 class="font-bold text-sm md:text-base text-primary text-center group-hover:scale-105 transition-transform" data-astro-cid-vnmiil5a> ${category.name} </h3> </div> <!-- Ripple effect on click --> <div class="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" data-astro-cid-vnmiil5a> <div class="ripple absolute inset-0 bg-primary/20 scale-0 rounded-full" data-astro-cid-vnmiil5a></div> </div> </button>`)} </div> </div> </section> ${renderScript($$result, "/home/zit/limpieza-aseo/src/components/CategoryHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/zit/limpieza-aseo/src/components/CategoryHero.astro", void 0);

const $$InteractiveCatalog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$InteractiveCatalog;
  const { products, categories } = Astro2.props;
  const categoryColors = {
    escobas: "from-blue-50 via-blue-100 to-blue-50",
    cepillos: "from-purple-50 via-purple-100 to-purple-50",
    traperos: "from-green-50 via-green-100 to-green-50",
    jabones: "from-cyan-50 via-cyan-100 to-cyan-50",
    esponjas: "from-yellow-50 via-yellow-100 to-yellow-50",
    varios: "from-pink-50 via-pink-100 to-pink-50"
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-16 transition-all duration-700 bg-gradient-to-br from-surface via-surface-container-low to-surface" id="products-section" data-active-category="" data-astro-cid-t5fw7d4k> <div class="max-w-screen-2xl mx-auto px-6 md:px-12" data-astro-cid-t5fw7d4k> <!-- Hero Section with Search and Filters --> <div class="mb-16" data-astro-cid-t5fw7d4k> <!-- Hero Header --> <div class="text-center mb-8" data-astro-cid-t5fw7d4k> <h1 class="font-headline text-4xl md:text-6xl font-bold text-primary mb-4" data-astro-cid-t5fw7d4k>
Nuestro Catálogo
</h1> <p class="text-lg text-on-surface-variant max-w-2xl mx-auto" data-astro-cid-t5fw7d4k>
Encuentra los mejores productos de limpieza y aseo. Filtra por categoría o busca directamente.
</p> </div> <!-- Filters Container --> <div class="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8" data-astro-cid-t5fw7d4k> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-t5fw7d4k> <!-- Search Bar --> <div class="relative" data-astro-cid-t5fw7d4k> <label for="product-search" class="text-xs font-bold text-on-surface-variant mb-2 block uppercase tracking-wide" data-astro-cid-t5fw7d4k>
Buscar Producto
</label> <div class="relative" data-astro-cid-t5fw7d4k> <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-xl text-on-surface-variant" data-astro-cid-t5fw7d4k>search</span> </div> <input type="text" id="product-search" placeholder="Nombre del producto..." class="w-full pl-12 pr-12 py-3.5 bg-surface-container rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-on-surface placeholder-on-surface-variant transition-all" data-astro-cid-t5fw7d4k> <button id="clear-search" class="absolute inset-y-0 right-0 pr-4 flex items-center opacity-0 pointer-events-none transition-opacity duration-200" aria-label="Limpiar búsqueda" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-xl text-on-surface-variant hover:text-primary transition-colors cursor-pointer" data-astro-cid-t5fw7d4k>close</span> </button> </div> </div> <!-- Category Dropdown --> <div class="relative" data-astro-cid-t5fw7d4k> <label for="category-filter" class="text-xs font-bold text-on-surface-variant mb-2 block uppercase tracking-wide" data-astro-cid-t5fw7d4k>
Filtrar por Categoría
</label> <div class="relative" data-astro-cid-t5fw7d4k> <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-xl text-on-surface-variant" data-astro-cid-t5fw7d4k>category</span> </div> <select id="category-filter" class="w-full pl-12 pr-10 py-3.5 bg-surface-container rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-on-surface appearance-none cursor-pointer transition-all" data-astro-cid-t5fw7d4k> <option value="" data-astro-cid-t5fw7d4k>Todas las categorías</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category.id, "value")} data-astro-cid-t5fw7d4k>${category.name}</option>`)} </select> <div class="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-xl text-on-surface-variant" data-astro-cid-t5fw7d4k>expand_more</span> </div> </div> </div> </div> <!-- Results Info --> <div id="search-results-info" class="mt-6 text-center transition-all duration-200 opacity-0" data-astro-cid-t5fw7d4k> <div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-sm" data-astro-cid-t5fw7d4k>filter_alt</span> <span class="font-semibold text-sm" id="results-text" data-astro-cid-t5fw7d4k></span> </div> </div> <!-- Active Filters --> <div id="active-filters" class="mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-200" data-astro-cid-t5fw7d4k> <button id="clear-all-filters" class="inline-flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-red-100 transition-colors" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-sm" data-astro-cid-t5fw7d4k>close</span> <span data-astro-cid-t5fw7d4k>Limpiar todo</span> </button> </div> </div> </div> <!-- Products by Category --> ${categories.map((category, index) => {
    const categoryProducts = products.filter((p) => p.categoryId === category.id);
    const bgColor = categoryColors[category.id] || "from-gray-50 via-gray-100 to-gray-50";
    return renderTemplate`<div class="category-section mb-20 transition-all duration-500"${addAttribute(`category-${category.id}`, "id")}${addAttribute(category.id, "data-category")} data-astro-cid-t5fw7d4k> <!-- Category Header with animated background --> <div${addAttribute(`relative rounded-3xl p-8 md:p-12 mb-10 overflow-hidden bg-gradient-to-br ${bgColor}`, "class")} data-astro-cid-t5fw7d4k> <div class="absolute inset-0 opacity-10" data-astro-cid-t5fw7d4k> <div class="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" data-astro-cid-t5fw7d4k></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" data-astro-cid-t5fw7d4k></div> </div> <div class="relative z-10 flex items-center gap-6" data-astro-cid-t5fw7d4k> <div class="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center" data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-5xl md:text-6xl text-primary" data-astro-cid-t5fw7d4k>${category.icon}</span> </div> <div data-astro-cid-t5fw7d4k> <h2 class="font-headline text-3xl md:text-5xl font-bold text-primary tracking-tight mb-2" data-astro-cid-t5fw7d4k> ${category.name} </h2> <p class="text-on-surface-variant text-lg" data-astro-cid-t5fw7d4k>${category.description}</p> </div> </div> </div> <!-- Products Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-astro-cid-t5fw7d4k> ${categoryProducts.map((product, prodIndex) => renderTemplate`<div class="product-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group"${addAttribute(`animation-delay: ${prodIndex * 50}ms;`, "style")}${addAttribute(product.name.toLowerCase(), "data-product-name")}${addAttribute(product.description.toLowerCase(), "data-product-description")}${addAttribute(product.price, "data-product-price")} data-astro-cid-t5fw7d4k> <div class="aspect-square overflow-hidden bg-surface-container-highest relative" data-astro-cid-t5fw7d4k> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" data-astro-cid-t5fw7d4k> <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-t5fw7d4k></div> </div> <div class="p-6" data-astro-cid-t5fw7d4k> <h4 class="font-headline font-bold text-lg text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors" data-astro-cid-t5fw7d4k> ${product.name} </h4> <p class="text-sm text-on-surface-variant mb-4 line-clamp-3" data-astro-cid-t5fw7d4k> ${product.description} </p> ${product.variants && product.variants.length > 0 && renderTemplate`<div class="mb-4" data-astro-cid-t5fw7d4k> <p class="text-xs font-semibold text-secondary mb-2" data-astro-cid-t5fw7d4k>Variantes disponibles:</p> <div class="flex flex-wrap gap-2" data-astro-cid-t5fw7d4k> ${product.variants.map((variant) => renderTemplate`<span class="text-xs px-3 py-1 bg-surface-container rounded-full text-on-surface-variant" data-astro-cid-t5fw7d4k> ${variant} </span>`)} </div> </div>`} ${product.price && renderTemplate`<div class="mb-3" data-astro-cid-t5fw7d4k> <p class="text-lg font-bold text-primary" data-astro-cid-t5fw7d4k>
$${(product.price / 1e3).toFixed(3).replace(".", ",")} COP
</p> </div>`} <!-- Quantity Selector --> <div class="mb-4" data-astro-cid-t5fw7d4k> <label class="text-xs font-semibold text-on-surface-variant mb-2 block" data-astro-cid-t5fw7d4k>Cantidad:</label> <div class="flex items-center gap-3" data-astro-cid-t5fw7d4k> <button class="quantity-btn-minus w-10 h-10 bg-surface-container rounded-lg font-bold text-primary hover:bg-surface-container-high transition-all flex items-center justify-center"${addAttribute(product.id, "data-product-id")} data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-xl" data-astro-cid-t5fw7d4k>remove</span> </button> <input type="number" min="1" value="1" class="quantity-input w-16 h-10 text-center border-2 border-surface-container rounded-lg font-bold text-primary focus:border-primary focus:outline-none"${addAttribute(product.id, "data-product-id")} data-astro-cid-t5fw7d4k> <button class="quantity-btn-plus w-10 h-10 bg-surface-container rounded-lg font-bold text-primary hover:bg-surface-container-high transition-all flex items-center justify-center"${addAttribute(product.id, "data-product-id")} data-astro-cid-t5fw7d4k> <span class="material-symbols-outlined text-xl" data-astro-cid-t5fw7d4k>add</span> </button> </div> </div> <button class="whatsapp-btn w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:bg-primary-container hover:scale-95 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"${addAttribute(product.id, "data-product-id")}${addAttribute(product.name, "data-product-name")}${addAttribute(product.sku, "data-product-sku")}${addAttribute(product.price, "data-product-price")} data-astro-cid-t5fw7d4k> <span data-astro-cid-t5fw7d4k>Consultar por WhatsApp</span> <span class="material-symbols-outlined text-sm" data-astro-cid-t5fw7d4k>arrow_forward</span> </button> </div> </div>`)} </div> </div>`;
  })} </div> </section> ${renderScript($$result, "/home/zit/limpieza-aseo/src/components/InteractiveCatalog.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/zit/limpieza-aseo/src/components/InteractiveCatalog.astro", void 0);

const $$Catalogo = createComponent(async ($$result, $$props, $$slots) => {
  let products$1 = [];
  let categories$1 = [];
  let fetchError = false;
  try {
    const timeoutPromise = new Promise(
      (_, reject) => setTimeout(() => reject(new Error("Database query timeout")), 5e3)
    );
    const dbQueryPromise = Promise.all([
      db.select({
        id: products.id,
        sku: products.sku,
        name: products.name,
        description: products.description,
        categoryId: products.categoryId,
        price: products.price,
        image: products.image,
        variants: products.variants,
        active: products.active,
        order: products.order
      }).from(products).all(),
      db.select().from(categories).orderBy(categories.order).all()
    ]);
    const [allProducts, allCategories] = await Promise.race([
      dbQueryPromise,
      timeoutPromise
    ]);
    products$1 = allProducts.filter((p) => p.active === true).map((p) => ({
      ...p,
      variants: p.variants ? JSON.parse(p.variants) : null
    }));
    categories$1 = allCategories;
  } catch (error) {
    console.error("Error fetching data from database:", error);
    fetchError = true;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Catálogo de Productos | Mister LyA", "description": "Explora nuestro catálogo completo de productos de limpieza profesional. Escobas, traperos, jabones, esponjas y más." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-20"> ${fetchError ? renderTemplate`<div class="min-h-screen flex items-center justify-center bg-surface-container-low"> <div class="text-center p-8 max-w-md"> <span class="material-symbols-outlined text-6xl text-on-surface-variant mb-4">error</span> <h2 class="font-headline text-2xl font-bold text-primary mb-4">
No pudimos cargar el catálogo
</h2> <p class="text-on-surface-variant mb-6">
Por favor, intenta recargar la página o contáctanos por WhatsApp.
</p> <button class="bg-primary text-on-primary px-6 py-3 rounded-full font-bold hover:scale-95 transition-all" onclick="window.location.reload()">
Recargar página
</button> </div> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CategoryHero", $$CategoryHero, { "categories": categories$1 })} ${renderComponent($$result3, "InteractiveCatalog", $$InteractiveCatalog, { "products": products$1, "categories": categories$1 })} ` })}`} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, {})} ` })}`;
}, "/home/zit/limpieza-aseo/src/pages/catalogo.astro", void 0);

const $$file = "/home/zit/limpieza-aseo/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

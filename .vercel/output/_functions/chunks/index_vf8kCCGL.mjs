import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { Q as renderTemplate, y as maybeRenderHead, a4 as addAttribute } from './sequence_Cz06ISpH.mjs';
import { r as renderComponent } from './entrypoint_wGGFH45s.mjs';
import { r as renderScript } from './script_C0wet-lX.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CRkeyq15.mjs';
import { d as db, c as categories, p as products } from './index_BO5qdVM-.mjs';
import { eq } from 'drizzle-orm';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProducts = await db.select({
    product: products,
    categoryName: categories.name
  }).from(products).leftJoin(categories, eq(products.categoryId, categories.id)).orderBy(products.order).all();
  const allCategories = await db.select().from(categories).orderBy(categories.name).all();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Productos | Admin Panel" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 lg:p-8"> <!-- Header --> <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8"> <div> <h1 class="text-3xl font-display font-bold text-on-surface mb-2">
Gestión de Productos
</h1> <p class="text-on-surface-variant">
Administra el catálogo completo de productos
</p> </div> <a href="/admin/products/new" class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-full font-semibold hover:shadow-lg hover:brightness-105 transition-all"> <span class="material-symbols-outlined">
add
</span> <span>Nuevo Producto</span> </a> </div> <!-- Filters --> <div class="bg-surface rounded-2xl p-6 mb-6 border border-outline-variant"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Search --> <div> <label class="block text-sm font-semibold text-on-surface mb-2">
Buscar productos
</label> <div class="relative"> <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
search
</span> <input type="text" id="search-input" placeholder="Buscar por SKU o nombre..." class="w-full pl-12 pr-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> </div> </div> <!-- Category Filter --> <div> <label class="block text-sm font-semibold text-on-surface mb-2">
Filtrar por categoría
</label> <select id="category-filter" class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> <option value="">Todas las categorías</option> ${allCategories.map((cat) => renderTemplate`<option${addAttribute(cat.id, "value")}>${cat.name}</option>`)} </select> </div> </div> </div> <!-- Products Table --> <div class="bg-surface rounded-2xl border border-outline-variant overflow-hidden"> <div class="overflow-x-auto"> <table class="w-full"> <thead class="bg-surface-container-highest border-b border-outline-variant"> <tr> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">Imagen</th> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">SKU</th> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">Nombre</th> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">Categoría</th> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">Precio</th> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">Estado</th> <th class="px-6 py-4 text-left text-sm font-semibold text-on-surface">Acciones</th> </tr> </thead> <tbody id="products-tbody"> ${allProducts.map(({ product, categoryName }) => renderTemplate`<tr class="border-b border-outline-variant hover:bg-surface-container-highest transition-colors product-row"${addAttribute(product.sku.toLowerCase(), "data-sku")}${addAttribute(product.name.toLowerCase(), "data-name")}${addAttribute(product.categoryId || "", "data-category")}> <td class="px-6 py-4"> ${product.image ? renderTemplate`<img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-12 h-12 object-cover rounded-lg">` : renderTemplate`<div class="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center"> <span class="material-symbols-outlined text-on-surface-variant text-sm">
image
</span> </div>`} </td> <td class="px-6 py-4"> <span class="font-mono text-sm text-on-surface">${product.sku}</span> </td> <td class="px-6 py-4"> <div> <p class="font-semibold text-on-surface">${product.name}</p> ${product.description && renderTemplate`<p class="text-sm text-on-surface-variant line-clamp-1">${product.description}</p>`} </div> </td> <td class="px-6 py-4"> <span class="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-sm"> ${categoryName || "Sin categoría"} </span> </td> <td class="px-6 py-4"> <span class="font-semibold text-on-surface">
$${product.price.toLocaleString("es-CO")} </span> </td> <td class="px-6 py-4"> <button class="toggle-active px-3 py-1 rounded-full text-sm font-semibold transition-all"${addAttribute(product.id, "data-id")}${addAttribute(product.active, "data-active")}> ${product.active ? renderTemplate`<span class="flex items-center gap-1 text-secondary"> <span class="material-symbols-outlined text-xs">check_circle</span>
Activo
</span>` : renderTemplate`<span class="flex items-center gap-1 text-error"> <span class="material-symbols-outlined text-xs">cancel</span>
Inactivo
</span>`} </button> </td> <td class="px-6 py-4"> <div class="flex items-center gap-2"> <a${addAttribute(`/admin/products/${product.id}/edit`, "href")} class="p-2 hover:bg-surface-container-highest rounded-lg transition-colors" title="Editar"> <span class="material-symbols-outlined text-primary">
edit
</span> </a> <button class="delete-btn p-2 hover:bg-error-container rounded-lg transition-colors"${addAttribute(product.id, "data-id")}${addAttribute(product.name, "data-name")} title="Eliminar"> <span class="material-symbols-outlined text-error">
delete
</span> </button> </div> </td> </tr>`)} </tbody> </table> </div> ${allProducts.length === 0 && renderTemplate`<div class="p-12 text-center"> <span class="material-symbols-outlined text-on-surface-variant mb-4 block" style="font-size: 64px;">
inventory_2
</span> <p class="text-lg text-on-surface-variant">
No hay productos registrados
</p> <a href="/admin/products/new" class="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-secondary text-on-secondary rounded-full font-semibold hover:shadow-lg transition-all"> <span class="material-symbols-outlined">add</span> <span>Crear primer producto</span> </a> </div>`} </div> </div> ${renderScript($$result2, "/home/zit/limpieza-aseo/src/pages/admin/products/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/zit/limpieza-aseo/src/pages/admin/products/index.astro", void 0);

const $$file = "/home/zit/limpieza-aseo/src/pages/admin/products/index.astro";
const $$url = "/admin/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

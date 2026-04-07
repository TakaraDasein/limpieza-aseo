import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { Q as renderTemplate, y as maybeRenderHead } from './sequence_Cz06ISpH.mjs';
import { r as renderComponent } from './entrypoint_wGGFH45s.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CRkeyq15.mjs';
import { d as db, c as categories } from './index_BO5qdVM-.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allCategories = await db.select().from(categories).orderBy(categories.order).all();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Categorías | Admin Panel" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 lg:p-8"> <!-- Header --> <div class="mb-8"> <h1 class="text-3xl font-display font-bold text-on-surface mb-2">
Gestión de Categorías
</h1> <p class="text-on-surface-variant">
Administra las categorías del catálogo
</p> </div> <!-- Categories Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${allCategories.map((category) => renderTemplate`<div class="bg-surface rounded-2xl p-6 border border-outline-variant hover:shadow-lg transition-all"> <div class="flex items-start gap-4 mb-4"> <div class="bg-primary-container rounded-xl p-3"> <span class="material-symbols-outlined text-on-primary-container text-2xl"> ${category.icon || "category"} </span> </div> <div class="flex-1"> <h3 class="text-xl font-display font-bold text-on-surface mb-1"> ${category.name} </h3> <p class="text-sm text-on-surface-variant"> ${category.description} </p> </div> </div> <div class="flex items-center justify-between pt-4 border-t border-outline-variant"> <span class="text-sm text-on-surface-variant">
Orden: ${category.order} </span> <span class="text-sm font-mono text-on-surface-variant">
ID: ${category.id} </span> </div> </div>`)} </div> ${allCategories.length === 0 && renderTemplate`<div class="bg-surface rounded-2xl p-12 text-center border border-outline-variant"> <span class="material-symbols-outlined text-on-surface-variant mb-4 block" style="font-size: 64px;">
category
</span> <p class="text-lg text-on-surface-variant">
No hay categorías registradas
</p> </div>`} </div> ` })}`;
}, "/home/zit/limpieza-aseo/src/pages/admin/categories/index.astro", void 0);

const $$file = "/home/zit/limpieza-aseo/src/pages/admin/categories/index.astro";
const $$url = "/admin/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

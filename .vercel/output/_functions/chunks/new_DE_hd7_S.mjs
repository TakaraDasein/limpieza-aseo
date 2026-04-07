import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { Q as renderTemplate, y as maybeRenderHead, a4 as addAttribute } from './sequence_Cz06ISpH.mjs';
import { r as renderComponent } from './entrypoint_wGGFH45s.mjs';
import { r as renderScript } from './script_C0wet-lX.mjs';
import { $ as $$AdminLayout } from './AdminLayout_CRkeyq15.mjs';
import { d as db, c as categories } from './index_BO5qdVM-.mjs';

const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const allCategories = await db.select().from(categories).orderBy(categories.name).all();
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Nuevo Producto | Admin Panel" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-6 lg:p-8 max-w-4xl"> <!-- Header --> <div class="mb-8"> <div class="flex items-center gap-3 mb-4"> <a href="/admin/products" class="p-2 hover:bg-surface-container-highest rounded-lg transition-colors"> <span class="material-symbols-outlined text-on-surface">
arrow_back
</span> </a> <div> <h1 class="text-3xl font-display font-bold text-on-surface">
Crear Nuevo Producto
</h1> <p class="text-on-surface-variant">
Completa el formulario para agregar un producto al catálogo
</p> </div> </div> </div> <!-- Form --> <form id="product-form" class="space-y-6"> <div class="bg-surface rounded-2xl p-6 border border-outline-variant space-y-6"> <!-- SKU --> <div> <label for="sku" class="block text-sm font-semibold text-on-surface mb-2">
SKU <span class="text-error">*</span> </label> <input type="text" id="sku" name="sku" required placeholder="Ej: ESC-001" class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> <p class="mt-1 text-sm text-on-surface-variant">Código único del producto</p> </div> <!-- Name --> <div> <label for="name" class="block text-sm font-semibold text-on-surface mb-2">
Nombre <span class="text-error">*</span> </label> <input type="text" id="name" name="name" required placeholder="Ej: Escoba TR" class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> </div> <!-- Description --> <div> <label for="description" class="block text-sm font-semibold text-on-surface mb-2">
Descripción
</label> <textarea id="description" name="description" rows="3" placeholder="Describe el producto..." class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"></textarea> </div> <!-- Category --> <div> <label for="categoryId" class="block text-sm font-semibold text-on-surface mb-2">
Categoría
</label> <select id="categoryId" name="categoryId" class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> <option value="">Sin categoría</option> ${allCategories.map((cat) => renderTemplate`<option${addAttribute(cat.id, "value")}>${cat.name}</option>`)} </select> </div> <!-- Price --> <div> <label for="price" class="block text-sm font-semibold text-on-surface mb-2">
Precio (COP) <span class="text-error">*</span> </label> <div class="relative"> <span class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-semibold">
$
</span> <input type="number" id="price" name="price" required min="0" step="100" placeholder="18000" class="w-full pl-8 pr-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> </div> <p class="mt-1 text-sm text-on-surface-variant">Precio en pesos colombianos</p> </div> <!-- Image Upload --> <div> <label class="block text-sm font-semibold text-on-surface mb-2">
Imagen del Producto
</label> <!-- Drop Zone --> <div id="drop-zone" class="relative border-2 border-dashed border-outline-variant rounded-xl p-8 text-center transition-all hover:border-primary hover:bg-surface-container/50 cursor-pointer"> <input type="file" id="file-input" accept="image/jpeg,image/jpg,image/png,image/webp" class="hidden"> <input type="hidden" id="image" name="image"> <!-- Upload Icon & Text (shown when no image) --> <div id="upload-prompt" class="flex flex-col items-center gap-3"> <span class="material-symbols-outlined text-5xl text-on-surface-variant">
cloud_upload
</span> <div> <p class="text-on-surface font-semibold mb-1">
Arrastra una imagen aquí o haz clic para seleccionar
</p> <p class="text-sm text-on-surface-variant">
JPG, PNG o WebP (máx. 5MB)
</p> </div> </div> <!-- Loading State --> <div id="upload-loading" class="hidden flex-col items-center gap-3"> <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div> <p class="text-on-surface font-semibold">Subiendo imagen...</p> </div> <!-- Preview --> <div id="image-preview" class="hidden"> <img id="preview-img" src="" alt="Preview" class="max-w-full max-h-64 mx-auto rounded-lg object-contain"> <button type="button" id="remove-image" class="mt-4 px-4 py-2 bg-error-container text-on-error-container rounded-lg hover:brightness-95 transition-all inline-flex items-center gap-2"> <span class="material-symbols-outlined text-lg">delete</span> <span>Eliminar imagen</span> </button> </div> </div> <!-- Error Message --> <div id="upload-error" class="hidden mt-2 p-3 bg-error-container border border-error rounded-lg"> <p id="upload-error-text" class="text-sm text-on-error-container"></p> </div> </div> <!-- Variants --> <div> <label for="variants" class="block text-sm font-semibold text-on-surface mb-2">
Variantes (JSON)
</label> <textarea id="variants" name="variants" rows="3" placeholder="[&quot;Cerda suave&quot;, &quot;Cerda dura&quot;]" class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none font-mono text-sm"></textarea> <p class="mt-1 text-sm text-on-surface-variant">Array JSON de variantes (opcional)</p> </div> <!-- Order --> <div> <label for="order" class="block text-sm font-semibold text-on-surface mb-2">
Orden
</label> <input type="number" id="order" name="order" min="0" value="0" class="w-full px-4 py-3 bg-surface-container rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"> <p class="mt-1 text-sm text-on-surface-variant">Orden de visualización (menor = primero)</p> </div> <!-- Active --> <div class="flex items-center gap-3"> <input type="checkbox" id="active" name="active" checked class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-2 focus:ring-primary/20"> <label for="active" class="text-sm font-semibold text-on-surface cursor-pointer">
Producto activo
</label> </div> </div> <!-- Error Message --> <div id="error-message" class="hidden bg-error-container border border-error rounded-2xl p-4"> <div class="flex items-start gap-3"> <span class="material-symbols-outlined text-error">
error
</span> <div> <p class="font-semibold text-on-error-container mb-1">Error</p> <p id="error-text" class="text-sm text-on-error-container"></p> </div> </div> </div> <!-- Actions --> <div class="flex gap-4"> <button type="submit" class="flex-1 lg:flex-none px-8 py-3 bg-secondary text-on-secondary rounded-full font-semibold hover:shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2"> <span class="material-symbols-outlined">
save
</span> <span>Crear Producto</span> </button> <a href="/admin/products" class="flex-1 lg:flex-none px-8 py-3 bg-surface-container text-on-surface rounded-full font-semibold hover:shadow-md transition-all flex items-center justify-center gap-2 border border-outline-variant"> <span class="material-symbols-outlined">
close
</span> <span>Cancelar</span> </a> </div> </form> </div> ${renderScript($$result2, "/home/zit/limpieza-aseo/src/pages/admin/products/new.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/zit/limpieza-aseo/src/pages/admin/products/new.astro", void 0);

const $$file = "/home/zit/limpieza-aseo/src/pages/admin/products/new.astro";
const $$url = "/admin/products/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

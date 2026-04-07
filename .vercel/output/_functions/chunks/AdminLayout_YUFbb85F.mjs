import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { a4 as addAttribute, ba as renderHead, bb as renderSlot, Q as renderTemplate } from './sequence_Cz06ISpH.mjs';
import { r as renderScript } from './script_C0wet-lX.mjs';
/* empty css                 */
import { g as getSession } from './server_BFgY1CG7.mjs';

const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Admin Panel | Mister LyA" } = Astro2.props;
  const session = await getSession(Astro2.request);
  if (!session?.user) {
    return Astro2.redirect("/login");
  }
  const user = session.user;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`<html class="light" lang="es" data-astro-cid-2kanml4j> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="bg-surface-container-low text-on-surface" data-astro-cid-2kanml4j> <div class="flex min-h-screen" data-astro-cid-2kanml4j> <!-- Sidebar --> <aside class="w-64 bg-surface border-r border-outline-variant hidden lg:flex lg:flex-col" data-astro-cid-2kanml4j> <!-- Logo --> <div class="p-6 border-b border-outline-variant" data-astro-cid-2kanml4j> <div class="flex items-center gap-3" data-astro-cid-2kanml4j> <div class="bg-primary rounded-full p-2" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-on-primary text-xl" data-astro-cid-2kanml4j>
admin_panel_settings
</span> </div> <div data-astro-cid-2kanml4j> <h1 class="font-display font-bold text-lg text-on-surface" data-astro-cid-2kanml4j>
Mister LyA
</h1> <p class="text-xs text-on-surface-variant" data-astro-cid-2kanml4j>
Admin Panel
</p> </div> </div> </div> <!-- Navigation --> <nav class="flex-1 p-4 space-y-1" data-astro-cid-2kanml4j> <a href="/admin"${addAttribute(`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentPath === "/admin" || currentPath === "/admin/" ? "bg-secondary-container text-on-secondary-container font-semibold" : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"}`, "class")} data-astro-cid-2kanml4j> <span class="material-symbols-outlined" data-astro-cid-2kanml4j>
dashboard
</span> <span data-astro-cid-2kanml4j>Dashboard</span> </a> <a href="/admin/products"${addAttribute(`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentPath.startsWith("/admin/products") ? "bg-secondary-container text-on-secondary-container font-semibold" : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"}`, "class")} data-astro-cid-2kanml4j> <span class="material-symbols-outlined" data-astro-cid-2kanml4j>
inventory_2
</span> <span data-astro-cid-2kanml4j>Productos</span> </a> <a href="/admin/categories"${addAttribute(`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${currentPath.startsWith("/admin/categories") ? "bg-secondary-container text-on-secondary-container font-semibold" : "text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface"}`, "class")} data-astro-cid-2kanml4j> <span class="material-symbols-outlined" data-astro-cid-2kanml4j>
category
</span> <span data-astro-cid-2kanml4j>Categorías</span> </a> </nav> <!-- User Info & Logout --> <div class="p-4 border-t border-outline-variant" data-astro-cid-2kanml4j> <div class="mb-3 px-4" data-astro-cid-2kanml4j> <p class="text-sm font-semibold text-on-surface truncate" data-astro-cid-2kanml4j> ${user.name} </p> <p class="text-xs text-on-surface-variant truncate" data-astro-cid-2kanml4j> ${user.email} </p> </div> <form method="post" action="/api/auth/signout" data-astro-cid-2kanml4j> <button type="submit" class="w-full flex items-center gap-2 px-4 py-2 rounded-xl bg-error-container text-on-error-container hover:shadow-md transition-all" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-sm" data-astro-cid-2kanml4j>
logout
</span> <span class="text-sm font-semibold" data-astro-cid-2kanml4j>Cerrar Sesión</span> </button> </form> </div> </aside> <!-- Mobile Header --> <div class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant" data-astro-cid-2kanml4j> <div class="flex items-center justify-between p-4" data-astro-cid-2kanml4j> <div class="flex items-center gap-2" data-astro-cid-2kanml4j> <div class="bg-primary rounded-full p-2" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-on-primary text-sm" data-astro-cid-2kanml4j>
admin_panel_settings
</span> </div> <h1 class="font-display font-bold text-on-surface" data-astro-cid-2kanml4j>
Mister LyA
</h1> </div> <button id="mobile-menu-btn" class="p-2 rounded-xl hover:bg-surface-container-highest" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-on-surface" data-astro-cid-2kanml4j>
menu
</span> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="lg:hidden fixed inset-0 z-40 bg-surface transform -translate-x-full transition-transform duration-300" data-astro-cid-2kanml4j> <div class="flex flex-col h-full" data-astro-cid-2kanml4j> <div class="p-4 border-b border-outline-variant flex items-center justify-between" data-astro-cid-2kanml4j> <div class="flex items-center gap-2" data-astro-cid-2kanml4j> <div class="bg-primary rounded-full p-2" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-on-primary text-sm" data-astro-cid-2kanml4j>
admin_panel_settings
</span> </div> <h1 class="font-display font-bold text-on-surface" data-astro-cid-2kanml4j>
Mister LyA
</h1> </div> <button id="mobile-menu-close" class="p-2 rounded-xl hover:bg-surface-container-highest" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-on-surface" data-astro-cid-2kanml4j>
close
</span> </button> </div> <nav class="flex-1 p-4 space-y-1" data-astro-cid-2kanml4j> <a href="/admin"${addAttribute(`flex items-center gap-3 px-4 py-3 rounded-xl ${currentPath === "/admin" || currentPath === "/admin/" ? "bg-secondary-container text-on-secondary-container font-semibold" : "text-on-surface-variant"}`, "class")} data-astro-cid-2kanml4j> <span class="material-symbols-outlined" data-astro-cid-2kanml4j>
dashboard
</span> <span data-astro-cid-2kanml4j>Dashboard</span> </a> <a href="/admin/products"${addAttribute(`flex items-center gap-3 px-4 py-3 rounded-xl ${currentPath.startsWith("/admin/products") ? "bg-secondary-container text-on-secondary-container font-semibold" : "text-on-surface-variant"}`, "class")} data-astro-cid-2kanml4j> <span class="material-symbols-outlined" data-astro-cid-2kanml4j>
inventory_2
</span> <span data-astro-cid-2kanml4j>Productos</span> </a> <a href="/admin/categories"${addAttribute(`flex items-center gap-3 px-4 py-3 rounded-xl ${currentPath.startsWith("/admin/categories") ? "bg-secondary-container text-on-secondary-container font-semibold" : "text-on-surface-variant"}`, "class")} data-astro-cid-2kanml4j> <span class="material-symbols-outlined" data-astro-cid-2kanml4j>
category
</span> <span data-astro-cid-2kanml4j>Categorías</span> </a> </nav> <div class="p-4 border-t border-outline-variant" data-astro-cid-2kanml4j> <div class="mb-3 px-4" data-astro-cid-2kanml4j> <p class="text-sm font-semibold text-on-surface" data-astro-cid-2kanml4j> ${user.name} </p> <p class="text-xs text-on-surface-variant" data-astro-cid-2kanml4j> ${user.email} </p> </div> <form method="post" action="/api/auth/signout" data-astro-cid-2kanml4j> <button type="submit" class="w-full flex items-center gap-2 px-4 py-2 rounded-xl bg-error-container text-on-error-container" data-astro-cid-2kanml4j> <span class="material-symbols-outlined text-sm" data-astro-cid-2kanml4j>
logout
</span> <span class="text-sm font-semibold" data-astro-cid-2kanml4j>Cerrar Sesión</span> </button> </form> </div> </div> </div> <!-- Main Content --> <main class="flex-1 lg:pt-0 pt-16" data-astro-cid-2kanml4j> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderScript($$result, "/home/zit/limpieza-aseo/src/layouts/AdminLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/zit/limpieza-aseo/src/layouts/AdminLayout.astro", void 0);

export { $$AdminLayout as $ };

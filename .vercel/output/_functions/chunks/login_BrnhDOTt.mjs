import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { Q as renderTemplate, y as maybeRenderHead } from './sequence_Cz06ISpH.mjs';
import { r as renderComponent } from './entrypoint_wGGFH45s.mjs';
import { $ as $$Layout } from './Layout_Cdd_i9Up.mjs';
import { g as getSession } from './server_B7A4FRAC.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Login;
  const session = await getSession(Astro2.request);
  if (session) {
    return Astro2.redirect("/admin");
  }
  const error = Astro2.url.searchParams.get("error");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar Sesión | Mister LyA", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-surface px-4" data-astro-cid-sgpqyurt> <div class="w-full max-w-md" data-astro-cid-sgpqyurt> <!-- Logo and Branding --> <div class="text-center mb-8" data-astro-cid-sgpqyurt> <div class="inline-block bg-primary rounded-full p-4 mb-4" data-astro-cid-sgpqyurt> <span class="material-symbols-outlined text-on-primary" style="font-size: 48px;" data-astro-cid-sgpqyurt>
cleaning_services
</span> </div> <h1 class="text-display-small font-display font-bold text-on-surface mb-2" data-astro-cid-sgpqyurt>
Mister LyA
</h1> <p class="text-body-large text-on-surface-variant" data-astro-cid-sgpqyurt>
El Flujo Prístino
</p> </div> <!-- Login Card --> <div class="bg-surface-container rounded-3xl shadow-md p-8" data-astro-cid-sgpqyurt> <h2 class="text-headline-medium font-display font-semibold text-on-surface mb-2" data-astro-cid-sgpqyurt>
Iniciar Sesión
</h2> <p class="text-body-medium text-on-surface-variant mb-6" data-astro-cid-sgpqyurt>
Accede al panel de administración
</p> <!-- Error Message --> ${error && renderTemplate`<div class="mb-6 p-4 bg-error-container rounded-xl flex items-start gap-3" data-astro-cid-sgpqyurt> <span class="material-symbols-outlined text-on-error-container flex-shrink-0" data-astro-cid-sgpqyurt>
error
</span> <div data-astro-cid-sgpqyurt> <p class="text-label-large font-semibold text-on-error-container mb-1" data-astro-cid-sgpqyurt>
Error de autenticación
</p> <p class="text-body-small text-on-error-container" data-astro-cid-sgpqyurt>
Credenciales inválidas. Por favor, verifica tu email y contraseña.
</p> </div> </div>`} <!-- Login Form --> <form method="post" action="/api/auth/signin/credentials" class="space-y-6" data-astro-cid-sgpqyurt> <!-- Email Field --> <div data-astro-cid-sgpqyurt> <label for="email" class="block text-label-large font-medium text-on-surface mb-2" data-astro-cid-sgpqyurt>
Email
</label> <div class="relative" data-astro-cid-sgpqyurt> <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-astro-cid-sgpqyurt>
mail
</span> <input type="email" id="email" name="email" required autocomplete="email" class="w-full pl-14 pr-4 py-3.5 bg-surface-container-high rounded-xl border border-outline text-body-large text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="admin@misterlya.com" data-astro-cid-sgpqyurt> </div> </div> <!-- Password Field --> <div data-astro-cid-sgpqyurt> <label for="password" class="block text-label-large font-medium text-on-surface mb-2" data-astro-cid-sgpqyurt>
Contraseña
</label> <div class="relative" data-astro-cid-sgpqyurt> <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-astro-cid-sgpqyurt>
lock
</span> <input type="password" id="password" name="password" required autocomplete="current-password" class="w-full pl-14 pr-4 py-3.5 bg-surface-container-high rounded-xl border border-outline text-body-large text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="••••••••" data-astro-cid-sgpqyurt> </div> </div> <!-- Submit Button --> <button type="submit" class="w-full py-3.5 px-6 bg-primary text-on-primary rounded-full text-label-large font-semibold hover:shadow-md hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all flex items-center justify-center gap-2" data-astro-cid-sgpqyurt> <span data-astro-cid-sgpqyurt>Iniciar Sesión</span> <span class="material-symbols-outlined" data-astro-cid-sgpqyurt>
arrow_forward
</span> </button> </form> </div> <!-- Footer --> <p class="text-center text-body-small text-on-surface-variant mt-6" data-astro-cid-sgpqyurt>
&copy; 2026 Mister LyA. Todos los derechos reservados.
</p> </div> </div> ` })}`;
}, "/home/zit/limpieza-aseo/src/pages/login.astro", void 0);

const $$file = "/home/zit/limpieza-aseo/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

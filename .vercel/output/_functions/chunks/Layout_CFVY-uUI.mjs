import { c as createComponent } from './astro-component_Dl5Ek4Rh.mjs';
import { a4 as addAttribute, ba as renderHead, bb as renderSlot, Q as renderTemplate } from './sequence_Cz06ISpH.mjs';
/* empty css                 */

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Mister LyA | El Flujo Prístino",
    description = "Elevamos el estándar de higiene con fórmulas editoriales diseñadas para el cuidado profesional de tus espacios más preciados."
  } = Astro2.props;
  return renderTemplate`<html class="light" lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Manrope:wght@400;500;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="text-on-surface overflow-x-hidden"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/zit/limpieza-aseo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

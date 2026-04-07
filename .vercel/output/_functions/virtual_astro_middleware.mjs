import { a8 as defineMiddleware, ah as sequence } from './chunks/sequence_Cz06ISpH.mjs';
import { g as getSession } from './chunks/server_B7A4FRAC.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (pathname.startsWith("/admin")) {
    const session = await getSession(context.request);
    if (!session || !session.user) {
      return context.redirect("/login");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };

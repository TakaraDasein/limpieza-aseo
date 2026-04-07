import { d as db, c as categories } from './index_BVNmz_ij.mjs';

const GET = async () => {
  try {
    const allCategories = await db.select().from(categories).orderBy(categories.order).all();
    return new Response(JSON.stringify(allCategories), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch categories" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

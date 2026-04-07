import { d as db, p as products, c as categories } from './index_BVNmz_ij.mjs';
import { eq } from 'drizzle-orm';

const GET = async () => {
  try {
    const allProducts = await db.select({
      id: products.id,
      sku: products.sku,
      name: products.name,
      description: products.description,
      categoryId: products.categoryId,
      price: products.price,
      image: products.image,
      variants: products.variants,
      active: products.active,
      order: products.order,
      createdAt: products.createdAt,
      updatedAt: products.updatedAt
    }).from(products).leftJoin(categories, eq(products.categoryId, categories.id)).all();
    const parsedProducts = allProducts.map((p) => ({
      ...p,
      variants: p.variants ? JSON.parse(p.variants) : null
    }));
    return new Response(JSON.stringify(parsedProducts), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    if (!body.sku || !body.name || !body.price) {
      return new Response(
        JSON.stringify({ error: "SKU, name, and price are required" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    const variantsJson = body.variants ? JSON.stringify(body.variants) : null;
    const newProduct = await db.insert(products).values({
      sku: body.sku,
      name: body.name,
      description: body.description || null,
      categoryId: body.categoryId || null,
      price: parseInt(body.price),
      image: body.image || null,
      variants: variantsJson,
      active: body.active !== void 0 ? body.active : true,
      order: body.order || 0
    }).returning();
    return new Response(JSON.stringify(newProduct[0]), {
      status: 201,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error creating product:", error);
    if (error.message?.includes("UNIQUE constraint failed")) {
      return new Response(
        JSON.stringify({ error: "A product with this SKU already exists" }),
        {
          status: 409,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
    return new Response(JSON.stringify({ error: "Failed to create product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

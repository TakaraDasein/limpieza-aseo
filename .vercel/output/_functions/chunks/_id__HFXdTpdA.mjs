import { d as db, p as products } from './index_BO5qdVM-.mjs';
import { eq } from 'drizzle-orm';

const GET = async ({ params }) => {
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Product ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const product = await db.select().from(products).where(eq(products.id, id)).get();
    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const parsedProduct = {
      ...product,
      variants: product.variants ? JSON.parse(product.variants) : null
    };
    return new Response(JSON.stringify(parsedProduct), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const PUT = async ({ params, request }) => {
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Product ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const body = await request.json();
    const updateData = {
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (body.sku !== void 0) updateData.sku = body.sku;
    if (body.name !== void 0) updateData.name = body.name;
    if (body.description !== void 0) updateData.description = body.description || null;
    if (body.categoryId !== void 0) updateData.categoryId = body.categoryId || null;
    if (body.price !== void 0) updateData.price = parseInt(body.price);
    if (body.image !== void 0) updateData.image = body.image || null;
    if (body.variants !== void 0) updateData.variants = body.variants ? JSON.stringify(body.variants) : null;
    if (body.active !== void 0) updateData.active = body.active;
    if (body.order !== void 0) updateData.order = body.order || 0;
    const updated = await db.update(products).set(updateData).where(eq(products.id, id)).returning();
    if (!updated || updated.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(JSON.stringify(updated[0]), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error updating product:", error);
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
    return new Response(JSON.stringify({ error: "Failed to update product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
const DELETE = async ({ params }) => {
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Product ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const deleted = await db.delete(products).where(eq(products.id, id)).returning();
    if (!deleted || deleted.length === 0) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(JSON.stringify({ error: "Failed to delete product" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

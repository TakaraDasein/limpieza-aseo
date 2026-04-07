import { g as getSession } from './server_BFgY1CG7.mjs';
import { v2 } from 'cloudinary';

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});
async function uploadImage(file, folder = "mister-lya/products") {
  try {
    const result = await v2.uploader.upload(file, {
      folder,
      resource_type: "image",
      // Auto-optimize images
      transformation: [
        {
          quality: "auto",
          fetch_format: "auto"
        }
      ]
    });
    return {
      url: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
}
function validateCloudinaryConfig() {
  const { cloud_name, api_key, api_secret } = v2.config();
  return !!(cloud_name && api_key && api_secret);
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const POST = async ({ request }) => {
  try {
    const session = await getSession(request);
    if (!session || !session.user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!validateCloudinaryConfig()) {
      return new Response(
        JSON.stringify({
          error: "Cloudinary is not properly configured. Please set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your environment variables."
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const formData = await request.formData();
    const file = formData.get("file");
    const folder = formData.get("folder") || "mister-lya/products";
    if (!file) {
      return new Response(
        JSON.stringify({ error: "No file provided" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(
        JSON.stringify({
          error: `Invalid file type. Allowed types: ${ALLOWED_TYPES.join(", ")}`
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({
          error: `File size exceeds maximum limit of ${MAX_FILE_SIZE / 1024 / 1024}MB`
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64String = `data:${file.type};base64,${buffer.toString("base64")}`;
    const result = await uploadImage(base64String, folder);
    return new Response(
      JSON.stringify({
        success: true,
        url: result.url,
        publicId: result.publicId
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Upload error:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to upload image"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

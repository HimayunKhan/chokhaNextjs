import dbConnect from "@/app/backend/config/dbConnect";
import {
  getProducts,
  newProduct,
} from "@/app/backend/controllers/productController";
import { createRouter } from "next-connect";

const router = createRouter();

dbConnect();

router.post(newProduct);
export async function POST(request, ctx) {
  return router.run(request, ctx);
}

router.get(getProducts);
export async function GET(request, ctx) {
  return router.run(request, ctx);
}

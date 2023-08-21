import dbConnect from "@/app/backend/config/dbConnect";
import {
  getProduct,

} from "@/app/backend/controllers/productController";
import { createRouter } from "next-connect";

const router = createRouter();

dbConnect();

router.get(getProduct);
export async function GET(request, ctx) {
  return router.run(request, ctx);
}

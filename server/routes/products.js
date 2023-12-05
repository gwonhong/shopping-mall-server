import express from "express";
import * as productController from "../controllers/product.js";

const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProduct);

export default router;
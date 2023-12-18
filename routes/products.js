import express from "express";
import productController from "../controllers/product.js";

const router = express.Router();

router.get("/:productId", productController.getProduct);
router.put("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);
router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);

export default router;

import express from "express";
import * as sellerController from "../controllers/seller.js";

const router = express.Router();

router.post("/login", sellerController.sellerLogin);
router.post("/logout", sellerController.sellerLogout);

router.post("/", sellerController.createSeller);
router.put("/", sellerController.editSeller);
router.delete("/", sellerController.deleteSeller);

export default router;
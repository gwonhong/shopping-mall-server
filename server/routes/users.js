import express from "express";
import userController from "../controllers/user.js";

const router = express.Router();

router.post("/login", userController.userLogin);
// router.post("/logout", userController.userLogout);

router.post("/", userController.createUser);
router.put("/", userController.editUser);
router.delete("/", userController.deleteUser);

export default router;
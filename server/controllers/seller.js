import db from "../models/index.js";
import { generateToken, authenticateToken } from "../utils/jwtAuth.js";

// Create, Update, Delete Seller
const createSeller = async (req, res, next) => {
  const { id, password, name, email } = req.body;
  try {
    const newSeller = await db.Seller.create({ id, password, name, email });
    console.log(newSeller);
    res.send(true);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const editSeller = async (req, res, next) => {
  const token = req.body.token;
  const { id, password, name, email } = req.body;
  try {
    const decoded = authenticateToken(token);
    if (decoded.id !== id) throw new Error("Wrong Token id");

    const currentSeller = await db.Seller.findByPk(id);
    if (!currentSeller) throw new Error("Seller Not Found");

    currentSeller.set({ password, name, email });
    const result = await currentSeller.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const deleteSeller = async (req, res, next) => {
  const token = req.body.token;
  const { id } = req.body;
  try {
    const decoded = authenticateToken(token);
    if (decoded.id !== id) throw new Error("Wrong Token id");

    const currentSeller = await db.Seller.findByPk(id);
    if (!currentSeller) throw new Error("Seller Not Found");
    
    const result = await currentSeller.destroy();
    console.log(result);
    res.send(true);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

// Read & Authenticate Seller
const sellerLogin = async (req, res, next) => {
  const { id, password } = req.body;
  try {
    const seller = await db.Seller.findByPk(id);
    if (!seller) throw new Error("id not found");
    if (password !== seller.password)
      throw new Error("Password does not match");
    const token = generateToken({ id, type: "seller" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const sellerLogout = (req, res, next) => {};

export default {
  createSeller,
  editSeller,
  deleteSeller,
  sellerLogin,
  sellerLogout,
};

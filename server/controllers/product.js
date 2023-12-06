import db from "../models/index.js";
import { authenticateToken } from "../utils/jwtAuth.js";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await db.Product.findAll();
    res.send(products);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

const getProduct = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await db.Product.findByPk(productId);
    res.send(product);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

const createProduct = async (req, res, next) => {
  const token = req.body.token;
  const { name, price, description } = req.body;
  let decoded;
  try {
    decoded = authenticateToken(token);
    if (decoded.type !== "seller") {
      throw new Error("Not a seller");
    }
    const product = await db.Product.create({
      name,
      price,
      description,
      sellerId: decoded.id,
    });
    res.send(product);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

export default { getAllProducts, getProduct, createProduct };

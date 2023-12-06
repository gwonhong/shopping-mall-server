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

const updateProduct = async (req, res, next) => {
  const token = req.body.token;
  const productId = req.params.productId;
  const { name, price, description } = req.body;
  try {
    const decoded = authenticateToken(token);
    if (decoded.type !== "seller") throw new Error("Not a seller");

    const product = await db.Product.findByPk(productId);
    if (!product) throw new Error("Product Not Found");
    if (product.sellerId !== decoded.id) throw new Error("Not your product");

    product.set({ name, price, description });
    const result = await product.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

const deleteProduct = async (req, res, next) => {
  const token = req.body.token;
  const productId = req.params.productId;
  try {
    const decoded = authenticateToken(token);
    if (decoded.type !== "seller") throw new Error("Not a seller");

    const product = await db.Product.findByPk(productId);
    if (!product) throw new Error("Product Not Found");
    if (product.sellerId !== decoded.id) throw new Error("Not your product");

    const result = await product.destroy();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

export default { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct };

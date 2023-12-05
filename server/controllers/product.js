import db from "../models/index.js";

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

export { getAllProducts, getProduct };

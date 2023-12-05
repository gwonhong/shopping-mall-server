import db from "../models/index.js";

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
    const { id, password, name, email } = req.body;
    try {
      const currentSeller = await db.Seller.findByPk(id);
      if (!currentSeller) {
        res.send("User Not Found");
      }
      currentSeller.set({ password, name, email });
      const result = await currentSeller.save();
      console.log(result);
      res.send(true);
    } catch (err) {
      console.error(err);
      res.send(err);
    }
  };
  const deleteSeller = async (req, res, next) => {
    const { id, password, name, email } = req.body;
    try {
      const currentSeller = await db.Seller.findByPk(id);
      if (!currentSeller) {
        res.send("User Not Found");
      }
      const result = await currentSeller.destroy();
      console.log(result);
      res.send(true);
    } catch (err) {
      console.error(err);
      res.send(err);
    }
  };

// Read & Authenticate Seller
const sellerLogin = (req, res, next) => {
};
const sellerLogout =  (req, res, next) => {
};

export {createSeller, editSeller, deleteSeller, sellerLogin, sellerLogout};
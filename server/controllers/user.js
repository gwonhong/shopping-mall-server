import db from "../models/index.js";

// Create, Update, Delete User
const createUser = async (req, res, next) => {
  const { id, password, name, email } = req.body;
  try {
    const newUser = await db.User.create({ id, password, name, email });
    console.log(newUser);
    res.send(true);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const editUser = async (req, res, next) => {
  const { id, password, name, email } = req.body;
  try {
    const currentUser = await db.User.findByPk(id);
    if (!currentUser) {
      res.send("User Not Found");
    }
    currentUser.set({ password, name, email });
    const result = await currentUser.save();
    console.log(result);
    res.send(true);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const deleteUser = async (req, res, next) => {
  const { id, password, name, email } = req.body;
  try {
    const currentUser = await db.User.findByPk(id);
    if (!currentUser) {
      res.send("User Not Found");
    }
    const result = await currentUser.destroy();
    console.log(result);
    res.send(true);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

// Read & Authenticate User
const userLogin = (req, res, next) => {};
const userLogout = (req, res, next) => {};

export { createUser, editUser, deleteUser, userLogin, userLogout };

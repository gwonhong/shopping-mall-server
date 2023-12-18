import db from "../models/index.js";
import { generateToken, authenticateToken } from "../utils/jwtAuth.js";

// Create, Update, Delete User
const createUser = async (req, res, next) => {
  const { id, password, name, email } = req.body;
  try {
    const newUser = await db.User.create({ id, password, name, email });
    console.log(newUser);
    res.status(403);
    res.send(true);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const editUser = async (req, res, next) => {
  const token = req.body.token;
  const { id, password, name, email } = req.body;
  try {
    const decoded = authenticateToken(token);
    if (decoded.id !== id) throw new Error("Wrong Token id");

    const currentUser = await db.User.findByPk(id);
    if (!currentUser) throw new Error("User Not Found");

    currentUser.set({ password, name, email });
    const result = await currentUser.save();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const deleteUser = async (req, res, next) => {
  const token = req.body.token;
  const { id } = req.body;
  try {
    const decoded = authenticateToken(token);
    if (decoded.id !== id) throw new Error("Wrong Token id");

    const currentUser = await db.User.findByPk(id);
    if (!currentUser) throw new Error("User Not Found");

    const result = await currentUser.destroy();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};

// Read & Authenticate User
const userLogin = async (req, res, next) => {
  const { id, password } = req.body;
  try {
    const user = await db.User.findByPk(id);
    if (!user) throw new Error("id not found");
    if (password !== user.password) throw new Error("Password does not match");
    const token = generateToken({ id, type: "user" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.send(err);
  }
};
const userLogout = (req, res, next) => {};

export default { createUser, editUser, deleteUser, userLogin, userLogout };

import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
const secretKey = process.env.SECRET_KEY;

function generateToken({ id, type }) {
  try {
    const token = jwt.sign({ id, type }, secretKey, { expiresIn: "1h" });
    return token;
  } catch (err) {
    throw err;
  }
}

function authenticateToken(token) {
  if (!token) {
    throw new Error("Token Not Found");
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    throw err;
  }
}

export { generateToken, authenticateToken };

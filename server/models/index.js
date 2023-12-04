import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

import User from "./user.js";

config();
const env = process.env;
const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASSWORD, {
  dialect: "mysql",
  host: env.DB_HOST,
});

const db = {};
// 
db.User = User(sequelize, DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

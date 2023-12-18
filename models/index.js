import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

import User from "./user.js";
import Seller from "./seller.js";
import Product from "./product.js";
import CartItem from "./cart-item.js";
import Order from "./order.js";
import OrderItem from "./order-item.js";

config();
const env = process.env;
const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASSWORD, {
  dialect: "mysql",
  host: env.DB_HOST,
});

const db = {};
// Tables
db.User = User(sequelize, DataTypes);
db.Seller = Seller(sequelize, DataTypes);
db.Product = Product(sequelize, DataTypes);
db.CartItem = CartItem(sequelize, DataTypes);
db.Order = Order(sequelize, DataTypes);
db.OrderItem = OrderItem(sequelize, DataTypes);

// Associations
db.User.hasMany(db.CartItem);
db.User.hasMany(db.Order);
db.Seller.hasMany(db.Product);
db.Product.belongsTo(db.Seller);
db.CartItem.belongsTo(db.User);
db.CartItem.belongsTo(db.Product);
db.Order.belongsTo(db.User);
db.Order.hasMany(db.OrderItem);
db.OrderItem.belongsTo(db.Order);
db.OrderItem.belongsTo(db.Product);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

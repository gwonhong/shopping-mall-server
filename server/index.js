import express from "express";
import cors from "cors";
import db from "./models/index.js";

import * as errorController from "./controllers/error.js";

import userRoutes from "./routes/users.js";
import sellerRoutes from "./routes/sellers.js";
import productRoutes from "./routes/products.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res, next) => {
  res.send("hello from server!");
});

app.use("/users", userRoutes);
app.use("/sellers", sellerRoutes);
app.use("/products", productRoutes);
app.use(errorController.get404);

db.sequelize
  .sync()
  .then(() => {
    console.log("db connected");
    app.listen(8080, () => {
      console.log("listening on 8080...");
    });
  })
  .catch((err) => {
    console.error(err);
  });

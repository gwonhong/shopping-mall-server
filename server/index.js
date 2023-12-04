import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./models/index.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res.send("hello from server!");
});

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

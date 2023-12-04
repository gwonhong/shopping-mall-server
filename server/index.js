import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
  res.send("hello from server!");
});
app.listen(8080, () => {
  console.log("listening on 8080...");
});

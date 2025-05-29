import express, { Application } from "express";
import ItemRoutes from "./src/routes/item.routes";

const app: Application = express();

app.use(express.json());

app.use("/items", ItemRoutes);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

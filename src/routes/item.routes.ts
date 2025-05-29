import { Router } from "express";
import { v4 as uuid } from "uuid";
import { Item } from "../models/item.model";

const router = Router();
const items: Item[] = [];

router.get<{}, Item[], {}, {}>("/", (req, res) => {
  res.status(200).json(items);
});

router.post<{}, Item | { error: string }, { name: string }, {}>(
  "/",
  (req, res): void => {
    const { name } = req.body;

    if (typeof name !== "string" || name.trim() === "") {
      res
        .status(400)
        .json({ error: "Name is required and must be a non-empty string." });
    }

    const newItem: Item = { id: uuid(), name: name.trim() };
    items.push(newItem);
    res.status(201).json(newItem);
  }
);

export default router;

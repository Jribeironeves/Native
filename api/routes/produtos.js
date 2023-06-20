import express from "express";
import {
  addProdutos,
  deleteProdutos,
  getProdutos,
  updateProdutos,
} from "../controllers/produtos.js";

const produtos = express.Router();

produtos.get("/produtos", getProdutos);

produtos.post("/produtos", addProdutos);

produtos.put("/produtos/:id", updateProdutos);

produtos.delete("/produtos/:id", deleteProdutos);

export default produtos;

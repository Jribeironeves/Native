import express from "express";
import { addPedido, deletePedido, getPedido, updatePedido } from "../controllers/pedidos.js";

const router = express.Router()

router.get("/", getPedido)

router.post("/", addPedido)

router.put("/:id", updatePedido)

router.delete("/:id", deletePedido)

export default router
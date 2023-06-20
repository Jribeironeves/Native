import { db } from "../db.js";

export const getPedido = (_, res) => {
  const q = "SELECT city, COUNT(*) AS total FROM pedidos GROUP BY city";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addPedido = (req, res) => {
  const q =
    "INSERT INTO pedidos(`name_product`, `description`, `amount_product`, `total_order`, `cliente` ) VALUES(?)";

  const values = [
    req.body.name_product,
    req.body.description,
    req.body.amount_product,
    req.body.total_order,
    req.body.cliente,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pedido criado com sucesso.");
  });
};

export const updatePedido = (req, res) => {
  const q =
    "UPDATE pedidos SET `name_product` = ?, `description` = FROM pedidos INNER JOIN finalizados ON pedidos.id = finalizados.id ? WHERE `id` = ?";

  const values = [
    req.body.name_product,
    req.body.description,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pedido atualizado com sucesso.");
  });
};

export const deletePedido = (req, res) => {
  const q = "DELETE FROM pedidos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pedido deletado com sucesso.");
  });
};
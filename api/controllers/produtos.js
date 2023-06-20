import { db } from "../db.js";

export const getProdutos = (_, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addProdutos = (req, res) => {
  const q =
    "INSERT INTO produtos(`title`, `description`, `price`) VALUES(?)";

  const values = [
    req.body.title,
    req.body.description,
    req.body.price,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produtos criado com sucesso.");
  });
};

export const updateProdutos = (req, res) => {
  const q =
    "UPDATE produtos SET `title` = ?, `description` = ? WHERE `id` = ?";

  const values = [
    req.body.title,
    req.body.description,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produtos atualizado com sucesso.");
  });
};

export const deleteProdutos = (req, res) => {
  const q = "DELETE FROM produtos WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Produtos deletado com sucesso.");
  });
};
import { db } from '../db.js'

export const getAllCustomers = (_, res) => {
  const q = 'SELECT city, COUNT(*) AS total FROM customers GROUP BY city'

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (data.length === 0) {
      return res.status(404).json({ error: err.message })
    }
    res.status(200).json(data)
  })
}

export const getCityCustomers = (req, res) => {
  const city = req.params.city

  const q = `SELECT id, first_name, last_name, email, gender, company, city, title FROM customers WHERE city = '${city}'`

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (data.length === 0) {
      return res.status(404).json({ error: err.message })
    }
    res.status(200).json(data)
  })
}

export const getCustomersId = (req, res) => {
  const id = req.params.id

  const q = `SELECT id, first_name, last_name, email, gender, company, city, title FROM customers WHERE id = '${id}'`

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    if (data.length === 0) {
      return res.status(404).json({ error: err.message })
    }

    const customer = data[0]
    res.status(200).json(customer)
  })
}

export const editCustomers = (req, res) => {
  const id = req.params.id
  const { first_name, last_name, email, gender, company, city, title } =
    req.body

  const q = `UPDATE customers SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', gender = '${gender}', company = '${company}', city = '${city}', title = '${title}' WHERE id = '${id}'`

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    if (data.affectedRows === 0) {
      return res.status(404).json({ error: err.message })
    }

    res.status(200).json(data)
  })
}

export const getDetails = (_, res) => {
  const q = 'SELECT * FROM customers'

  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    if (data.length === 0) {
      return res.status(404).json({ error: err.message })
    }

    res.status(200).json(data)
  })
}

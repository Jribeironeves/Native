import express from 'express'
import pedidoRoutes from './routes/customers.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', pedidoRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(statusCode).json({ message: err.message })
})

app.listen(8800)

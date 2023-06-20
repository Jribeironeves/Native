import express from 'express'
import produtosRoutes from './routes/produtos.js'
import pedidoRoutes from './routes/pedidos.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/produtos', produtosRoutes)
app.use('/', pedidoRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(statusCode).json({ message: err.message })
  return
})

app.listen(8800)

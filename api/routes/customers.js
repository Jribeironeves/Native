import express from 'express'
import {
  addCustomers,
  deleteCustomers,
  getAllCustomers,
  updateCustomers
} from '../controllers/customers.js'

const router = express.Router()

router.get('/customers', getAllCustomers)

router.post('/', addCustomers)

router.put('/:id', updateCustomers)

router.delete('/:id', deleteCustomers)

export default router

import express from 'express'
import {
  getAllCustomers,
  getDetails,
  getCityCustomers,
  getCustomersId,
  editCustomers
} from '../controllers/customers.js'

const router = express.Router()

router.get('/customers', getAllCustomers)

router.get('/customers/details', getDetails)

router.get('/customers/:city', getCityCustomers)

router.get('/customers/:id', getCustomersId)

router.put('/customers/:id', editCustomers)

export default router

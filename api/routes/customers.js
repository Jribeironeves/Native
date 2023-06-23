import express from 'express'
import {
  getAllCustomers,
  getCityCustomers,
  getCustomersId,
  editCustomers,
  getDetails
} from '../controllers/customers.js'

const router = express.Router()

router.get('/customers', getAllCustomers)

router.get('/customers/details', getDetails)

router.get('/customers/:city', getCityCustomers)

router.get('/customers/:id', getCustomersId)

router.put('/customers/edit/:id', editCustomers)

export default router

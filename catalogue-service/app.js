import express from 'express'
import data from './data.json'

const app = express()

const localiseProducts = products => locationID => products.filter(product => {
  return product.locationID === undefined || product.locationID === locationID
})

const getLocalisedProducts = localiseProducts(data.products)

app.get('/products', (req, res) => res.json({
  "products": getLocalisedProducts(req.query.locationID)
}))

export default app
export { localiseProducts }

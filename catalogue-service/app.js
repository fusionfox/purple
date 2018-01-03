import express from 'express'
import data from './data.json'

const app = express()

const filterProductByLocationID = locationID => product =>
  product.locationID === undefined || product.locationID === locationID

const getLocalisedProducts = (products, locationID) =>
  products.filter(filterProductByLocationID(locationID))

app.get('/products', (req, res) => res.json({
  'products': getLocalisedProducts(data.products, req.query.locationID)
}))

export default app
export { filterProductByLocationID }

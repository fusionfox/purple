import { localiseProducts } from './../app'

describe('localiseProducts function', () => {
  describe('Given an array of products', () => {
    const getLocalisedProducts = localiseProducts([
      {"category": "Sports", "name": "default_product"},
      {"category": "News", "name": "local_product_1", "locationID": "LONDON"},
      {"category": "News", "name": "local_product_2", "locationID": "LEEDS"}
    ])

    test('Given no locationID, it should only return unlocalised products', () => {
      expect(getLocalisedProducts()).toEqual([
        {"category": "Sports", "name": "default_product"}
      ])
    })

    test('Given a locationID, it should return unlocalised products plus any matching local products', () => {
      expect(getLocalisedProducts("LEEDS")).toEqual([
        {"category": "Sports", "name": "default_product"},
        {"category": "News", "name": "local_product_2", "locationID": "LEEDS"}
      ])
    })
  })
})

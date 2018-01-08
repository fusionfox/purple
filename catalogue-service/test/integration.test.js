import request from 'supertest'
import app from './../app'

describe('When no locationID is given', () => {
  test('It should return the default products', () => {
    return request(app).get('/products').then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual({
        'products': [
          {id: '201', 'category': 'news', 'name': 'Sky News'},
          {id: '202', 'category': 'news', 'name': 'Sky Sports News'}
        ]
      })
    })
  })
})

describe('When a non-matching locationID is given', () => {
  test('It should return the default products', () => {
    return request(app).get('/products?locationID=LEEDS').then(response => {
      expect(response.statusCode).toBe(200)
      expect(response.body).toEqual({
        'products': [
          {id: '201', 'category': 'news', 'name': 'Sky News'},
          {id: '202', 'category': 'news', 'name': 'Sky Sports News'}
        ]
      })
    })
  })
})

describe('When a matching locationID is given', () => {
  describe('It should return the default products, plus location specific products', () => {
    test('For LONDON', () => {
      return request(app).get('/products?locationID=LONDON').then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          'products': [
            {id: '201', 'category': 'news', 'name': 'Sky News'},
            {id: '202', 'category': 'news', 'name': 'Sky Sports News'},
            {id: '301', 'category': 'sports', 'name': 'Arsenal TV', 'locationID': 'LONDON'},
            {id: '302', 'category': 'sports', 'name': 'Chelsea TV', 'locationID': 'LONDON'}
          ]
        })
      })
    })

    test('For LIVERPOOL', () => {
      return request(app).get('/products?locationID=LIVERPOOL').then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
          'products': [
            {id: '201', 'category': 'news', 'name': 'Sky News'},
            {id: '202', 'category': 'news', 'name': 'Sky Sports News'},
            {id: '303', 'category': 'sports', 'name': 'Liverpool TV', 'locationID': 'LIVERPOOL'}
          ]
        })
      })
    })
  })
})

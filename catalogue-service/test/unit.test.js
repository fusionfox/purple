import { filterProductByLocationID } from './../app'

const productWithoutLocation = {
  'category': 'category_1',
  'name': 'product_without_location'
}

const productWithLocation1 = {
  'category': 'category_1',
  'name': 'product_with_location1',
  'locationID': 'LOCATION1'
}

const productWithLocation2 = {
  'category': 'category_1',
  'name': 'product_with_location2',
  'locationID': 'LOCATION2'
}

describe('filterProductByLocationID function', () => {
  describe('Curried with a locationID', () => {
    const filterWithLocationID = filterProductByLocationID('LOCATION1')

    test('Accepts products without location', () => {
      expect(filterWithLocationID(productWithoutLocation)).toBe(true)
    })

    test('Accepts products with matching location', () => {
      expect(filterWithLocationID(productWithLocation1)).toBe(true)
    })

    test('Rejects products with non-matching location', () => {
      expect(filterWithLocationID(productWithLocation2)).toBe(false)
    })
  })

  describe('Curried without a locationID', () => {
    const filterWithoutLocationID = filterProductByLocationID()

    test('Accepts products without location', () => {
      expect(filterWithoutLocationID(productWithoutLocation)).toBe(true)
    })

    test('Rejects products with location', () => {
      expect(filterWithoutLocationID(productWithLocation1)).toBe(false)
      expect(filterWithoutLocationID(productWithLocation2)).toBe(false)
    })
  })
})

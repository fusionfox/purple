import customerLocationService from '../stubs/customerLocationService'
import Cookies from 'js-cookie'

const getCookieInPromise = (name) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(Cookies.get(name))
    } catch (e) {
      reject(e)
    }
  })
}

export function getCustomerID () {
  return {
    type: 'GET_CUSTOMERID',
    payload: getCookieInPromise('customerID')
  }
}

export function getLocationID (customerID) {
  return {
    type: 'GET_LOCATIONID',
    payload: customerLocationService(customerID)
  }
}

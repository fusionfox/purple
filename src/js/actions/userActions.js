import customerLocationService from '../stubs/customerLocationService'

export function getLocationID (customerID) {
  return {
    type: 'GET_LOCATIONID',
    payload: customerLocationService(customerID)
  }
}

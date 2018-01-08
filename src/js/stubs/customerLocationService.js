const customerLocationData = {
  '000001': 'LONDON',
  '000002': 'LIVERPOOL',
  '000003': 'LEEDS'
}

const customerLocationService = customerID => {
  return new Promise((resolve, reject) => {
    try {
      resolve(customerLocationData[customerID])
    } catch (e) {
      reject(e)
    }
  })
}

export default customerLocationService

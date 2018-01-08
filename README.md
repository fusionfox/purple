
###  Display customer’s available products
> As a **customer**, I want to select the **products** that are available to me, based on the **location** of my home.

### Build & Run
`//TODO`

### Future Improvements
##### Catalogue Service
- Contract testing to ensure that the service complies with the agreed-upon schema
- Setup Docker to run this and any future services
- GraphQL would be nice, probably overkill though

##### Product Selection Client
- Behavioural tests using CasperJS would automate testing of user journeys
- Do something about Unhandled Rejection Errors
  - Rejected promises dispatch `GET_LOCATIONID_REJECTED` or `FETCH_PRODUCTS_REJECTED` actions which update the state with the given error, but the actual promise rejection is not handled, leading to errors in the developer console
  - Generally better error handling when making service calls would be good, including showing something to the user
- Dynamically generate product lists based off category, rather than having hard-coded News and Sports lists

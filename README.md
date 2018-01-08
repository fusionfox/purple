
###  Display customer’s available products
> As a **customer**, I want to select the **products** that are available to me, based on the **location** of my home.

### Build & Run

##### Catalogue Service

First start up the Catalogue Service.

1. Change into the `catalogue-service` directory
2. Install dependencies with `npm install`
3. Start the service with `npm start`

##### Product Selection Client

In another terminal, start the client.

1. Change into the project root directory
2. Install dependencies with `npm install`
3. Start the client with `npm start`
4. If it does not open automatically, open [http://localhost:3000](http://localhost:3000/) in a web browser
5. Change location by editing the `customerID` cookie

### Testing

Simply run `npm test` in either the project root directory or in the `catalogue-service` directory.

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

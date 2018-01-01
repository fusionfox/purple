const express = require('express')
const app = express()

app.set("port", process.env.PORT || 3001);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(app.get("port"), () => {
  console.log(`Server is running, find it at: http://localhost:${app.get("port")}/`)
})

import app from './app'

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Server is running, find it at: http://localhost:${app.get("port")}/`)
})

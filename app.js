require("dotenv").config()
require("./config/database").connect()

const app = require("thebigdev-microservice")
const routes = require("./routes")

app.use('/', routes)

app.use('*', (_req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reach a route that is not defined on this server"
    }
  })
})

module.exports = app
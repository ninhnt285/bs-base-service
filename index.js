const app = require("./app")

const API_PORT = process.env.PORT || process.env.API_PORT || 8009

app.listen(API_PORT, () => {
  console.log("Server is running on port", API_PORT)
})

module.exports = app
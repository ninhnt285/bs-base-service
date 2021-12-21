const express = require("express")
const {
  controllers
} = require("thebigdev-microservice")

const { auth, hasRole } = controllers.authController
const defaultHandler = controllers.defaultHandler

const router = express.Router()

// TODO: Delete in production
router.get("/test", defaultHandler)
router.get("/test/parse", (_req, res) => {
  res.sendSuccess(_req.user)
})

module.exports = router

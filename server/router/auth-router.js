const express =require("express")
const router = express.Router()
const authController = require("../controllers/auth-controller")



router.route("/").get(authController.home)
router.route("/reg").post(authController.reg)
router.route("/login").post(authController.login)

module.exports = router
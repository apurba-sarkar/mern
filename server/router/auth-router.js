const express =require("express")
const router = express.Router()
const authController = require("../controllers/auth-controller")



router.route("/").get(authController.home)
router.route("/reg").post(authController.reg)

module.exports = router
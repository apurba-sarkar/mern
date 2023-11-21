const express =require("express")
const router = express.Router()
const authController = require("../controllers/auth-controller")
const signUpSchema = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middleware")


router.route("/").get(authController.home)
router.route("/reg").post(validate(signUpSchema), authController.reg)
router.route("/login").post(authController.login)

module.exports = router
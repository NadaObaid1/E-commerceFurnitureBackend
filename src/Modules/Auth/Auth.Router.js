import {Router} from 'express'
import fileUpload, {fileValidation} from "../../Services/multer.js"
import * as controllerAuth from "./Auth.Controller.js"
const router = Router()

router.post("/signup", fileUpload(fileValidation.image).single('image'), controllerAuth.SignUp);
router.post("/signin", controllerAuth.SignIn);
router.get("/confirmEmail/:token", controllerAuth.ConfirmEmail);
router.patch("/SendCode", controllerAuth.SendCode)
router.patch("/forgetPassword", controllerAuth.forgetPassword)
export default router;
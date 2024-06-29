import {Router} from "express"
import * as ControllerCatogores  from "../Catogories/Catogories.Controller.js"
import fileUpload, {fileValidation} from "../../Services/multer.js"
import { auth } from "../../Middlware/Auth.js"
import { endPoint } from "./Categories.EndPoint.js"

const router = Router()

router.get("/", auth(endPoint.getAlls), ControllerCatogores.getCatogorires)
router.get("/:id", auth(endPoint.specific), ControllerCatogores.getSpecficCatogorires)
router.post("/", auth(endPoint.create), fileUpload(fileValidation.image).single('image'), ControllerCatogores.CreateCategory)
export default router
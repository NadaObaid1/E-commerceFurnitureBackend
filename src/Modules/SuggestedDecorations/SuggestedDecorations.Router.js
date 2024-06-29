import { Router } from 'express';
import * as SuggestedDecorationsController from "./SuggestedDecorations.Controller.js";
import fileUpload, { fileValidation } from "../../Services/multer.js";


const router = Router();

router.post('/SuggestedDecorations', fileUpload(fileValidation.image).single('image'), SuggestedDecorationsController.createSuggestedDecorations);
router.get('/SuggestedDecorations', SuggestedDecorationsController.getAllSuggestedDecorations);

export default router;

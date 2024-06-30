import SuggestedDecorationsModel from "../../../DB/Model/SuggestedDecorations.Model.js";
import cloudinary from '../../Services/Cloudinary.js'


export const createSuggestedDecorations = async (req, res) => {
  try {
    const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path, {
        folder : `${process.env.APP_NAME}/SuggestedDecorations`
    })
    const newSuggestedDecorations = await SuggestedDecorationsModel.create({image: {secure_url, public_id}})
    
    return res.status(201).json({ message: "success", newSuggestedDecorations });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error});
   

  }
};

export const getAllSuggestedDecorations = async (req, res) => {
    try {
      const SuggestedDecorations = await SuggestedDecorationsModel.find(); 
      return res.status(201).json({ message: "success", SuggestedDecorations });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
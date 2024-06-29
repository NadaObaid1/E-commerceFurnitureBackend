import slugify from 'slugify'
import CategoryModel from '../../../DB/Model/Category.Model.js'
import cloudinary from "../../Services/Cloudinary.js"

export const getCatogorires = async(req, res)=>{
    const Categories = await CategoryModel.find().select('Name')//لو درجع بس الاسم مثلا واكيد رح يرجع ال id
    return res.status(200).json({message: "success", Categories})
}

export const getSpecficCatogorires = async(req, res)=>{
    const {id} = req.params 
    //return res.json(id)
    const Category = await CategoryModel.findById(id)
    return res.status(200).json({message: "success", Category})
}

export const CreateCategory = async (req, res)=>{
    try{
        const Name = req.body.Name.toLowerCase()
        const SlugName = slugify(Name) //بحطيلي داش اذا كتبت الاسم وكان في مسافة فيه
    
        if(await CategoryModel.findOne({Name})){
            return res.status(409).json("Category Name is Exists")
        }
    
        const {secure_url, public_id} = await cloudinary.uploader.upload(req.file.path, {
            folder : `${process.env.APP_NAME}/Categories`
        })
    
        const Cat = await CategoryModel.create({Name, slug: SlugName, image: {secure_url, public_id}, createdBy: req.user._id,
            UpdatedBy: req.user._id})
        return res.status(201).json({message: "success", Cat})
        //return res.json(SlugName)
    }catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ message: "An error occurred while creating the category", error });
  }
}
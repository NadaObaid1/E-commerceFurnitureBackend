import mongoose, {Schema, Types, model} from "mongoose";
const CategorySchema = new Schema({
    Name:{
        type: String,
        required: true,
        unique : true
    },
     image: { 
        type: Object,
        required : true
     },
     slug : {
        type: String,
        required : true
     },
      status : {
        type : String,
        default : 'Active',
        enum : ['Active', 'Inactive']
      },
       createdBy:{type: Types.ObjectId, ref: 'User', required: true},
       UpdatedBy:{type: Types.ObjectId, ref: 'User', required: true}
    },
    {     
    timestamps: true,
    toJSON: {virtuals:true},
    toObject: {virtuals: true}
   })
   
const CategoryModel = mongoose.models.Category || model('Category', CategorySchema)
export default CategoryModel
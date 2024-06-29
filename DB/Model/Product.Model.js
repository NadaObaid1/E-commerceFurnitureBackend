import mongoose, {Schema, model, Types} from 'mongoose'

const productschema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: { // الكمية الموجودة
        type: Number,
        default:1
    },
    price:{
        type: Number,
        required: true
    },
    discount: {
        type : Number,
        default:0
    },
    finalPrice:{
        type : Number
    },
    number_sellers: {
        type: Number,
        default:0
    },
    mainImage: {
        type:Object,
        required:true
    },
    subImages: [{
        type:Object,
        required: true
    }],
    status: {
        type:String,
        default: 'Active',
        enum: ['Active', 'Inactive']
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    categoryId:{type: Types.ObjectId, ref: 'Category', required: true},
    createdBy: {type: Types.ObjectId,ref: 'User',required: true},
    updatedBy: {type: Types.ObjectId, ref: 'User', required: true},
    },
    {
        timestamps: true
    })
    const productModel = mongoose.models.Product || model('Product', productschema)
    export default productModel;

import mongoose, { Schema, model, Types } from "mongoose";

const EmployeeSchema = new Schema({
    name: {
        type: String,
        minlength: 4,
        maxlength: 20,
        required: true
    },
    descrption: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        
    },
    createdBy:{type: Types.ObjectId, ref: 'User'},
    updatedBy: {type: Types.ObjectId, ref: 'User'},
},
{
    timestamps: true
});

const EmployeeModel = model('Employee', EmployeeSchema, 'employees');

export default EmployeeModel;
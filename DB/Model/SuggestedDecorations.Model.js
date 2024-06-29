import mongoose, { Schema, model, Types } from "mongoose";

const SuggestedDecorationsSchema = new Schema({

    image: {
        type: Object,
        
    },
    createdBy:{type: Types.ObjectId, ref: 'User'},
    updatedBy: {type: Types.ObjectId, ref: 'User'},
},
{
    timestamps: true
});

const SuggestedDecorationsModel = model('SuggestedDecorations', SuggestedDecorationsSchema, 'SuggestedDecoration');

export default SuggestedDecorationsModel;
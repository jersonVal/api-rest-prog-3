import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

// schema creation
const studentSchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true,
    },
    lastname:{
        type: "String",
        required: true,
    },
    career: {
        type: "String",
        required: true
    },
    phone: {
        type: "Number",
        required: true
    },
    email: {
        type: "String",
        required: true
    }
});

studentSchema.plugin(validator)
export default studentSchema;
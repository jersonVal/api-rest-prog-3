import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

// schema creation
const teacherSchema = new mongoose.Schema({
    document: {
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
    email: {
        type: "String",
        required: true,
        unique: true
    },
    phone: {
        type: "String",
        required: true
    },
    office: {
        type: "String",
        required: true
    },
    department: {
        type: "String",
        required: true
    }
});


teacherSchema.plugin(validator);
export default teacherSchema;
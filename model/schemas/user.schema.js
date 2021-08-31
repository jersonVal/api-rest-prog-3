import mongoose from 'mongoose';
import validator from 'mongoose-unique-validator';

// schema creation
const userSchema = new mongoose.Schema({
    name:{
        type: "String",
        required: true,
    },
    lastname:{
        type: "String",
        required: true,
    },
    username: {
        type: "String",
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    },
    role: {
        type: "Number",
        required: true
    }
});

userSchema.plugin(validator)
export default userSchema;
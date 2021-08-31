import mongoose from 'mongoose'

// schema creation
const courseSchema = new mongoose.Schema({
    code: {
        type: "String",
        required: true,
    },
    name:{
        type: "String",
        required: true,
    }
});

export default courseSchema;
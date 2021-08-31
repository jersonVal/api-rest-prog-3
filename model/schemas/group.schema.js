import mongoose from 'mongoose'

// schema creation
const groupSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_course"
    },
    period_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_period"
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "coll_teacher"
    },
    number: {
        type: "Number",
        required: true
    }
   
});

export default  groupSchema;
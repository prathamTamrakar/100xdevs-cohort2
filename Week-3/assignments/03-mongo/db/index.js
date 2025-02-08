const mongoose = require('mongoose');
const {MONGO_URL} = require('./constant')
// Connect to MongoDB
mongoose.connect(MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    coursePurchased:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    tittle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    courseFee:{
        type:Number,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course} = require("../db/index")
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../constant")
// User Routes
router.post('/signup',async  (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username,password);
    
    // if (!username || !password) {
    //     res.status(400).json({
    //         message: "Please provide both username and password"
    //     })
    // } else if (await User.findOne({ username })) {
    //             return res.status(400).json({
    //                 message: "User already exists"
    //             })
    //         }

    const user = await User.create({
        username,
        password
    })

    if (user) {
        res.status(201).json({
            message: "User created successfully"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong"
        })
    }
});

router.post('/signin',async (req, res) => {
    // Implement User signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username,
        password
    })
    if(user){
    const token = jwt.sign({username},JWT_SECRET);
    res.json({
        token
    })
    }else{
        res.status(411).json({
           message: "Incorrect email and password"
        })
    }

});

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    // console.log(response);
    
    res.json({
        data: response
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const username = req.username
    const courseId = req.params.courseId;
    await User.updateOne({
        username: username
    }, {
        "$push": {
            coursePurchased:courseId
        }
    })

    res.json({
        message: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    })
    const courses = await Course.find({
        _id:{
            "$in": user.coursePurchased
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router
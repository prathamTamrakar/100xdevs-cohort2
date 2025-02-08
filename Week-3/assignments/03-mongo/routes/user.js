const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully",
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({})
    // console.log(response);

    res.json({
        data: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username
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

router.get('/purchasedCourses',userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
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
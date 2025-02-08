const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        res.status(400).json({
            message: "Please provide both username and password"
        })
    } else if (Admin.findOne({ username })) {
                return res.status(400).json({
                    message: "Admin already exists"
                })
            }

    const admin = await Admin.create({
        username,
        password
    })

    if (admin) {
        res.status(201).json({
            message: "Admin created successfully"
        })
    } else {
        res.status(400).json({
            message: "Something went wrong"
        })
    }

});

router.post('/courses',adminMiddleware,async (req, res) => {
    // Implement course creation logic
    const tittle = req.body.tittle;
    const description = req.body.description;
    const courseFee = req.body.courseFee;
    const imageLink = req.body.imageLink;
    const published = req.body.published;
    console.log(tittle, description, courseFee, imageLink, published);
    
    await Course.create({
        tittle,
        description,
        courseFee,
        imageLink,
        published
    })
    res.json({
        message: "Course created successfully"
    })
});

router.get('/courses',adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    // console.log(response);
    
    res.json({
        data: response
    })

});

module.exports = router;
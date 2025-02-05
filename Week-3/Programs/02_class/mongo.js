const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const {MONGO_URL} = require("./constant")

mongoose.connect(
  MONGO_URL,
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "raj",
  email: "rajjaiswal@gmail.com",
  password: "123456",
})
user.save()

const app = express();
app.use(express.json());

function userExists(email, password) {
  // should check in the database
}

app.post("/signup", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email })

  if (existingUser) {
    return res.status(409).json({
      msg: "User already exists",
    });
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
  })
  user.save()
  res.json({
    message: "User created",
  })
})

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");

});
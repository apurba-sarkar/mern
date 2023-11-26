const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("response from the server");
  } catch (error) {
    console.log(error);
  }
};
const reg = async (req, res) => {
  try {
    // console.log(req.body)
    const { username, email, phone, password } = req.body;
    // res.status(200).send("response from the server this is a registration page")

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({
        msg: "email already exist",
        token: await userExist.generateToken(),
      });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

// user-login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credientials" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        message: "Login Succesful",
        token: await userExist.generateToken(),
        userID: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // res.send(500).json("internel server error");
    next(error);
  }
};

module.exports = { home, reg, login };

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
      return res.status(400).json({ msg: "email already exist" });
    }


    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });

    res.status(201).json({ msg: userCreated });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, reg };

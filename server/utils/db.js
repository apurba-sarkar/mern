const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern";
// mongoose.connect(URI);


const URI = process.env.MONGODB_URI



const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected !!");
  } catch (error) {
    console.log("database failed");
  }
};

module.exports = connectDb;

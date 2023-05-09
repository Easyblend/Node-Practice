const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection successfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;

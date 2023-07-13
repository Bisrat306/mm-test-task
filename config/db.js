const mongoose = require('mongoose');

// Make connection to MongoDB
const connectDB = async () => {
  try {
    console.log("Connecting to DB....")
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("DB connected")
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = connectDB;
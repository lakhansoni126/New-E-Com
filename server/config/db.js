const { default: mongoose } = require("mongoose");
const db = () => {
  try {
    const connect = mongoose.connect(process.env.MONGODB);
    console.log("DB connected");
  } catch (error) {
    console.log("database error");
  }
};
module.exports = db;

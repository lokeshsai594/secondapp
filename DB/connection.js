const mongoose = require('mongoose');

const URI = "mongodb+srv://lokesh:lokesh@cluster0-fb4pl.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async()=>{
  await  mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true});
  console.log("DBconnected..!!");
}

module.exports = connectDB;
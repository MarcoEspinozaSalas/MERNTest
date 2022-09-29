const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    name: {type: String , required: [true, "Please provide a Name!"]},
    email: { type: String, unique: true, required: [true, "Please provide an Email!"] },
    password: {type:String,required: [true, "Please provide a password!"]},
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model.users || mongoose.model("users", UserDetailsSchema);

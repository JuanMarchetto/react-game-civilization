const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    pass: {
      type: String,
      required: true,
      trim: true,
      minlength: 8
    },
    mail: {
      type: String,
      required: true,
      trim: true,
      minlength: 5
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

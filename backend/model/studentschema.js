const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    rollno: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/
    },
    address: {
      type: String,
      required: true
    },
    guardianname: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);
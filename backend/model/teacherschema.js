const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      required: true
    },

    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"]
    },

    subject: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    teacherId: {
      type: String,
      required: true,
       unique: true
    },
    phone: {
      type: String,
      required: true,
      unique:true,
      match: /^[0-9]{10}$/
    },

    qualification: {
      type: String
    },

    salary: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);
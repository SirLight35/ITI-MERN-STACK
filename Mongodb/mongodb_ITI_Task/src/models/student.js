const mongoose = require("mongoose");
const validator = require("validator");

const Student = mongoose.model("Student", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    validate(val) {
      if (val <= 0) {
        throw new Error("Age must be positive");
      }
    },
  },
  grade: {
    type: String,
    required: true,
  },
});

module.exports = Student;

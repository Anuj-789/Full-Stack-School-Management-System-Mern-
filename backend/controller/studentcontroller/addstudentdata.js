const Student = require("../../model/studentschema");

const createStudent = async (req, res) => {
  try {
   
    const data = req.body;
    const newStudent = await Student.create(data);

    res.status(201).json({
      message: "Student saved successfully",

    });

  } catch (error) {
    res.status(500).json({
      message: "Error saving student",
      error: error.message
    });
  }
};

module.exports = createStudent;
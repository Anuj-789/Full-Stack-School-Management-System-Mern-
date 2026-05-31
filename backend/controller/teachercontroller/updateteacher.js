const Teacher = require("../../model/teacherschema");

const updateteacherdata = async (req, res) => {
  try {
    const updateddata = await Teacher.findOneAndUpdate(
      { teacherId: req.params.teacherId },
      req.body,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!updateddata) {
      return res.status(404).json({
        success: false,
        message:
          "Teacher not found with this teacherId: " +
          req.params.teacherId
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher data updated successfully",
      data: updateddata
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in updating teacher data",
      error: error.message
    });
  }
};

module.exports = updateteacherdata;
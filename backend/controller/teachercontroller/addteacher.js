const teacher = require("../../model/teacherschema");

const addteacher = async (req, res) => {
  try {
    const data = req.body;

    const newteacher = await teacher.create(data);

    return res.status(201).json({
      message: "Teacher data added successfully",
      data: newteacher,
    });

  } catch (error) {
    console.log("ERROR:", error);

    // 🔥 DUPLICATE KEY HANDLING (IMPORTANT)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];

      return res.status(400).json({
        message: `${field} already exists. Please use a different ${field}.`,
      });
    }

    // 🔥 VALIDATION ERROR HANDLING (optional but good)
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Error adding teacher",
      error: error.message,
    });
  }
};

module.exports = addteacher;
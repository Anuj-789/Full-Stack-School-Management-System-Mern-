const express = require('express');
const router = express.Router();

const addteacher = require('../controller/teachercontroller/addteacher')
const teacherdata = require('../controller/teachercontroller/getteacherdata')
const teacherdatabyid = require('../controller/teachercontroller/getteacherdatabyid')
const deleteteacher = require('../controller/teachercontroller/deleteteacher')
const updateteacher = require('../controller/teachercontroller/updateteacher')

router.post("/addteacher", addteacher)
router.get("/getteacherdata", teacherdata)
router.get("/getteacherdata/:teacherId", teacherdatabyid)
router.delete("/deleteteacher/:teacherId", deleteteacher)
router.put("/updateteacher/:teacherId", updateteacher)



module.exports = router;
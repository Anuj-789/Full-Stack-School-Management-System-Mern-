const exprees = require("express");
const router = exprees.Router();

const createstudent = require('../controller/studentcontroller/addstudentdata')
const getdata = require('../controller/studentcontroller/getstudentdata')
const getstudentdatabyrollno = require('../controller/studentcontroller/getstudentdatabyrollno') 
const deletestudentdatabyrollno = require('../controller/studentcontroller/deletedatabyrollno')
const updatestudentdatabyrollno = require('../controller/studentcontroller/updatestudentdata')

router.post("/addstudent",createstudent);

router.get("/getstudentdata", getdata );

router.get("/getstudent/rollno/:rollno", getstudentdatabyrollno);

router.delete("/deletestudent/rollno/:rollno",deletestudentdatabyrollno );

router.put("/updatestudent/rollno/:rollno", updatestudentdatabyrollno);

module.exports = router;
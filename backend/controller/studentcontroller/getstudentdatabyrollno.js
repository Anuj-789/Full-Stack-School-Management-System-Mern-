const student = require('../../model/studentschema');

const getstudentdatabyrollno = async(req,res)=>{
    try{
        const studentdata = await student.findOne({rollno : req.params.rollno});
        if(!studentdata) {
            return res.status(404).json({
                message : "student not found with rollno" +req.params.rollno
            })
        }

        res.status(200).json({
            message : "student fetched succesfully",
            data : studentdata
        })

    } catch (error){
        res.status(500).json({
            message: "error in fetching student data by rollno",
            error : error.message
        })
    }
}

module.exports = getstudentdatabyrollno


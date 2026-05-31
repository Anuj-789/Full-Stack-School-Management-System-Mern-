const student = require('../../model/studentschema');

const updatadata = async(req,res)=>{

    try{
        const updatedata = await student.findOneAndUpdate(
            {rollno : req.params.rollno},
            req.body,
            {new:true}
        );

            if (!updatedata) {
             return res.status(404).json({
             message: "Student not found with this roll number"
            });
           }

         res.status(200).json({
             message: "Student updated successfully",
             data: updatedata
            });


    }catch(error){
        res.status(500).json({
            message: "Error in updating student data by roll number",
            error: error.message    
        })
    }
}

module.exports = updatadata;
const student = require('../../model/studentschema')

const deletedata = async(req,res)=>{
    try{
        const deletestudent = await student.findOneAndDelete({
            rollno : req.params.rollno
        });

        if(!deletestudent){
            return res.status(404).json({
                message:"student not found by this rollno" + req.params.rollno
            });
        }

        res.status(200).json({
            message:"student data deleted successfully",
            data:deletestudent
        })
    }catch(error){
        res.status(500).json({
            message: "error in deleting student data by rollno",
            error: error.message
        })
    }
}

module.exports = deletedata;
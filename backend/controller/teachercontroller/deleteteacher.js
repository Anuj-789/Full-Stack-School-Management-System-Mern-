const teacher = require('../../model/teacherschema')

const deleteteacher = async(req,res)=>{

    try{
        const deleteofid = await teacher.findOneAndDelete({teacherId : req.params.teacherId});

        if(!deleteofid){
            return res.status(404).json({
                message: "Teacher not found by this teacherId" + req.params.teacherId
            })
        }
        res.status(200).json({
            message:"Teacher data deleted successfully",
            data: deleteofid
        })
    }catch(error){
        res.status(500).json({
            message: "Error in deleting teacher data",
            error: error.message
        })
    }
}

module.exports = deleteteacher;
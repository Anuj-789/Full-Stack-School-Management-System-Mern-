const teacher = require('../../model/teacherschema')

const getteacherdatabyid = async(req,res)=>{
    try{
        
        const teacherdatabyid = await teacher.findOne({ teacherId: req.params.teacherId });

        if(!teacherdatabyid){
            res.status(404).json({
                message:"Teacher not found with id" + req.params.teacherId,

            })
        }
        res.status(200).json({
            message:"Teacher data fetched successfully",
            data : teacherdatabyid
        })
    }catch(error){
        res.status(500).json({
            message:"Error in fetching teacher data by id",
            error:error.message
        })
    }
}

module.exports = getteacherdatabyid;
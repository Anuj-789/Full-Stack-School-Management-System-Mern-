const teacher = require('../../model/teacherschema');

const getdata = async(req,res)=>{
    try{
        const teacherdata = await teacher.find();
        res.status(200).json({
            message:"Teacher data fetched successfully",
            data : teacherdata
        });

    }catch(error){
        res.status(500).json({
            message:"Error in fetching teacher data",
            error:error.message
        })
    }
}

module.exports = getdata;
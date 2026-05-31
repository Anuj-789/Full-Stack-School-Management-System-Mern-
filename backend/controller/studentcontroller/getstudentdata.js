
const student = require('../../model/studentschema');


const getdata = async(req,res)=>{
    try{
        const students  = await student.find();
        res.status(200).json({
            message:"student data fetched successfully",
            data : students
        });
    } catch(error){
        res.status(500).json({message:"error in fetching student data", error:error.message})
    }
}

module.exports = getdata;

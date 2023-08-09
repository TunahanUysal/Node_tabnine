const User=require("../models/users");

exports.getAll=async(req,res,next)=>{
    try {
        const All=await User.findAll();
        return res.status(200).json(All)
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getOne=async(req,res,next)=>{
    try {
        const user=await User.findByPk(req.params.id);
        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).json(error);
    }
}
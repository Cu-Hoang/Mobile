const createError = require("http-errors");
const { productValidate } = require("../helpers/validation");
const cloudinary = require('../config/cloudinary');

uploadController = {
    upload: async (req,res,next)=>{
        try {
            cloudinary.uploader.upload(req.file.path,(err,result)=>{
                if(err){
                    console.log(err);
                    return res.json({
                        status: "error",
                        msg: "There is an error"
                    });
                }
                return res.json({
                    status: "success",
                    msg: "Upload image successfully",
                    data: result
                })
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = uploadController;
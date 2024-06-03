const joi = require('joi')

const userValidate = data =>{
    const userSchema = joi.object({
        email: joi.string().pattern(new RegExp('^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$')).email().lowercase().required(),
        password: joi.string().min(6).max(32).required()
    });
    return userSchema.validate(data);
     
}
module.exports ={
    userValidate
}
const User = require("../model/User");
const createError = require("http-errors");
const { userValidate } = require("../helpers/validation");

const userController = {
    getUser: async (req, res, next) => {
        try {
          const { id } = req.params;
          if (!id) throw createError.InternalServerError();
          const user = await User.findById(id);
          if (!user)
            return res.json({
              status: "error",
              msg: "This user does not exist",
            });
          return res.json({
            status: "success",
            msg: "find user successfully",
            data: user,
          });
        } catch (error) {
          next(error);
        }
    }, 
}

module.exports = userController;
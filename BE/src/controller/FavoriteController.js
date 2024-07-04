const Favorite = require("../model/Favorite");
const createError = require("http-errors");
const { favoriteValidate } = require("../helpers/validation");

const favoriteController = {
    create: async (req,res,next) =>{
        try {
            const { userId } = req.body;
            const { error } = favoriteValidate({ userId });
            if (error) throw createError(error.details[0].message);
            const favorite = new Favorite(req.body);
            const result = await favorite.save();
            if (!result)
              return res.json({
                status: "error",
                msg: "There was an error when add wishlist",
              });
            return res.json({
              status: "success",
              msg: "Add wishlist successfully",
              data: result._doc
            });
          } catch (error) {
            next(error);
          }
    },
    update: async (req, res, next) => {
        try {
          const { id } = req.params;
          if (!id) throw createError.InternalServerError();
          const result = await Favorite.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          if (!result)
            return res.json({
              status: "error",
              msg: "Cannot update wishlist",
            });
          return res.json({
            status: "success",
            msg: "Update wishlist successfully",
            data: result,
          });
        } catch (error) {
          next(error);
        }
      },
}
module.exports = favoriteController;
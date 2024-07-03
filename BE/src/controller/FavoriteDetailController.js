const FavoriteDetail = require("../model/FavoriteDetail");
const createError = require("http-errors");
const { favoriteDetailValidate } = require("../helpers/validation");

const favoriteDetailController = {
  create: async (req, res, next) => {
    try {
      for (var value of req.body) {
        const { favoriteId, productId } = value;
        const { error } = favoriteDetailValidate({ favoriteId, productId });
        if (error) throw createError(error.details[0].message);
      }
      const result = await FavoriteDetail.create(req.body);
      if (!result)
        return res.json({
          status: "error",
          msg: "There was an error when add wishlist",
        });
      return res.json({
        status: "success",
        msg: "Add wishlist successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = favoriteDetailController;

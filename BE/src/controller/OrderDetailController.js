const OrderDetail = require("../model/OrderDetail");
const createError = require("http-errors");
const { orderDetailValidate } = require("../helpers/validation");

const orderDetailController = {
  create: async (req, res, next) => {
    try {
      for (var value of req.body) {
        const { orderId, productId } = value;
        const { error } = orderDetailValidate({ orderId, productId });
        if (error) throw createError(error.details[0].message);
      }
      const result = await OrderDetail.create(req.body);
      if (!result)
        return res.json({
          status: "error",
          msg: "There was an error when creating a new oreder",
        });
      return res.json({
        status: "success",
        msg: "Create a new order successfully",
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = orderDetailController;

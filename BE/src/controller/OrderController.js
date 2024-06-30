const Order = require("../model/Order");
const createError = require("http-errors");
const { orderValidate } = require("../helpers/validation");

const orderController = {
    create: async (req,res,next) =>{
        try {
            const { userId } = req.body;
            const { error } = orderValidate({ userId });
            if (error) throw createError(error.details[0].message);
            const order = new Order(req.body);
            const result = await order.save();
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
    update: async (req, res, next) => {
        try {
          const { id } = req.params;
          if (!id) throw createError.InternalServerError();
          const result = await Order.findByIdAndUpdate(id, req.body, {
            new: true,
          });
          if (!result)
            return res.json({
              status: "error",
              msg: "Cannot update the order",
            });
          return res.json({
            status: "success",
            msg: "Update order successfully",
            data: result,
          });
        } catch (error) {
          next(error);
        }
      },
}
module.exports = orderController;
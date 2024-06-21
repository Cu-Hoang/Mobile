const Product = require("../model/Product");
const createError = require("http-errors");
const { productValidate } = require("../helpers/validation");

const productController = {
  create: async (req, res, next) => {
    try {
      const { name } = req.body;
      const { error } = productValidate({ name });
      if (error) throw createError(error.details[0].message);
      const product = new Product(req.body);
      const result = await product.save();
      if (!result)
        return res.json({
          status: "error",
          msg: "There was an error when creating a new product",
        });
      return res.json({
        status: "success",
        msg: "Create a new product successfully",
      });
    } catch (error) {
      next(error);
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) throw createError.InternalServerError();
      const product = await Product.findById(id);
      if (!product)
        return res.json({
          status: "error",
          msg: "This product does not exist",
        });
      return res.json({
        status: "success",
        msg: "find product successfully",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },
  getProducts: async (req, res, next) => {
    try {
      const listProduct = await Product.find();
      if (!listProduct)
        return res.json({
          status: "error",
          msg: "Cannot get the list of product",
        });
      return res.json({
        status: "success",
        msg: "get the list of product successfully",
        data: listProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) throw createError.InternalServerError();
      const result = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!result)
        return res.json({
          status: "error",
          msg: "Cannot update the product",
        });
      return res.json({
        status: "success",
        msg: "Update product successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) throw createError.InternalServerError();
      const result = await Product.findByIdAndDelete(id);
      if (!result)
        return res.json({
          status: "error",
          msg: "Cannot delete the product",
        });
      return res.json({
        status: "success",
        msg: "delete the product successfully",
        data: result
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = productController;

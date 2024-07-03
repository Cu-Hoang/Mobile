const Wishlist = require("../model/Wishlist");
const createError = require("http-errors");

const wishlistController = {
    add: async (req, res, next) => {
        try {
            const { userId, productId } = req.body;

            let wishlist = await Wishlist.findOne({ userId });
            if (!wishlist) {
                wishlist = new Wishlist({ userId, items: [{ productId }] });
            } else {
                if (wishlist.items.some(item => item.productId.toString() === productId)) {
                    return res.json({
                        status: "error",
                        msg: "Product is already in the wishlist",
                    });
                }
                wishlist.items.push({ productId });
            }

            const result = await wishlist.save();
            if (!result) {
                return res.json({
                    status: "error",
                    msg: "There was an error when adding the product to the wishlist",
                });
            }
            return res.json({
                status: "success",
                msg: "Product added to wishlist successfully",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    },
    remove: async (req, res, next) => {
        try {
            const { userId } = req.body;
            const { productId } = req.params;

            let wishlist = await Wishlist.findOne({ userId });
            if (!wishlist) {
                return res.json({
                    status: "error",
                    msg: "Wishlist not found",
                });
            }

            wishlist.items = wishlist.items.filter(item => item.productId.toString() !== productId);
            const result = await wishlist.save();

            return res.json({
                status: "success",
                msg: "Product removed from wishlist successfully",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    },
    getUserWishlist: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const wishlist = await Wishlist.findOne({ userId }).populate('items.productId');
            if (!wishlist) {
                return res.json({
                    status: "error",
                    msg: "Wishlist not found",
                });
            }

            return res.json({
                status: "success",
                data: wishlist,
            });
        } catch (error) {
            next(error);
        }
    }
};

module.exports = wishlistController;

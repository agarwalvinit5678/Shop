const express=require("express");
const { deleteProduct, updateProduct,createProduct, getAllProducts, viewProduct } = require("../controllers/productcontroller");
const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(viewProduct);

module.exports= router

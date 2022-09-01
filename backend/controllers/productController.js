const Product=require("../models/productModel.js");
const errorHandler = require("../utils/errorHandler.js");
const catchAsyncError =require("../middleware/catchAsyncErrors");

//Creaate Product
exports.createProduct=catchAsyncError(async(req,res,next)=>{
    const product=await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
    });

//Display Product
exports.getAllProducts=catchAsyncError(async(req,res)=>{
    const products =await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}
);
// Update Product
exports.updateProduct=catchAsyncError(async(req,res,next)=>{
    let product =await Product.findById(req.params.id);
    if(!product)
    {return next(new errorHandler("Product not found",404))}

    product= await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true,useFindAndModify:false});
    res.status(200).json({
        success:true,
        product
    })
}
);
// Delete Product
exports.deleteProduct=catchAsyncError(
    async(req,res,next)=>{
        let product =await Product.findById(req.params.id);
        if(!product)
        {return next(new errorHandler("Product not found",404))}
        product= await product.remove();
         res.status(200).json({
            success:true,
            message:"Product deleted"
        })
    }
);
//Display product
exports.viewProduct=catchAsyncError(
    async(req,res,next)=>{
        let product =await Product.findById(req.params.id);
        if(!product)
        {return next(new errorHandler("Product not found",404))}
         res.status(200).json({
            success:true,
            product,
        })
    }
    
);

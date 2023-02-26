const { products } = require("../Model/Product.js");

 const getProducts = async (req,res) => {
    const product = await products.find();
    res.json(product)
}
 const addProduct = async (req,res) => {
    const {title,description,price,image} = req.body;
    try {
        const newProduct = new products ({
            title:title,
            description:description,
            price:price,
            image:image
        })
        newProduct.save();
        res.status(200).json({message:"Product added succesfully",product:newProduct})
        
    } catch (error) {
        console.log("error at product adding")
        
    }
}
 const deleteProduct = async (req,res) => {
    const product_id = req.params.id;
    await products.deleteOne({_id:product_id});
    return res.status(200).json({message:"Product deleted succesfully",product_id:product_id})
}
 const updateProduct = async (req,res) => {
    const product_id = req.params.id
    const {title,description,price,image} = req.body;
    try {
        await products.findById(product_id,(err,updated)=>{
            updated.title = title ? title:updated.title,
            updated.description = description ? description : updated.description,
            updated.price = price ? price : updated.price,
            updated.image = image ? image : updated.image,
            updated.save();

            return res.status(200).json({message:`${product_id} product updated succesfully`})
        })
        
    } catch (error) {
        console.log("error at update product")   
    }
}

module.exports = {
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
}
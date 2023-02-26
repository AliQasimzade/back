const express = require('express');
const { get } = require('mongoose');
const { getProducts,addProduct,deleteProduct,updateProduct } = require('../Controller/Product.js');
const router = express.Router();
router.get('/api/products',getProducts);
router.post('/api/addproduct',addProduct);
router.get('/api/deleteproduct/:id',deleteProduct);
router.put('/api/updateproduct/:id',updateProduct);

module.exports = router

const express = require("express");
const { getOrders,postOrder,deleteOrder, sendOrder } = require("../Controller/Orders.js");
const router = express.Router();
router.get('/api/orders',getOrders);
router.post('/api/postorder',postOrder);
router.get('/api/deleteorder/:id',deleteOrder)
router.put('/api/sendorder/:id',sendOrder)

module.exports = router
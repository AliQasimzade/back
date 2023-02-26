const { orders } = require("../Model/Orders.js");

 const getOrders = async (req,res) => {
    const order = await orders.find();
    res.json(order)
}

 const  postOrder = async (req,res) => {
    const {user_id,name,email,products,surname,phone,isSend} = req.body;
    try {
        const newOrder = new orders({
            user_id:user_id,
            name:name,
            email:email,
            surname:surname,
            phone:phone,
            products:products,
            isSend:false
        })
        newOrder.save();
        res.status(200).json({message:"Order ordered succesfully",order:newOrder})
        
    } catch (error) {
        console.log("error at order")
        
    }
}

 const deleteOrder = async (req,res) => {
    const order_id = req.params.id;
    await orders.deleteOne({_id:order_id});
    return res.status(200).json({message:"Order deleted succesfully",order_id:order_id})

}
 const sendOrder = (req,res) => {
    console.log(req.body)
    const order_id = req.params.id;
        orders.findByIdAndUpdate(order_id, { $set: { isSend: true } }, (err, updatedProduct) => {
            if (err) {
              console.error(err);
              res.status(500).send('Error updating product');
            } else {
              res.json(updatedProduct);
            }
          });
        
    
}

module.exports = {
    getOrders,
    postOrder,
    deleteOrder,
    sendOrder
}
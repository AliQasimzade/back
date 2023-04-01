const express = require('express');
const dotenv = require('dotenv') ;
const cors = require('cors') ;
const { Connection } = require('./Db/db.js') ;
const adminRouter = require('./Router/AdminUser.js') ;
const productRouter = require('./Router/Product.js') ;
const userRouter = require('./Router/User.js') ;
const orderRouter = require('./Router/Order.js') ;
const listingsRouter = require('./Router/Listings.js') ;
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json());
app.use(listingsRouter)
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
app.use(orderRouter);
Connection();
const port  = process.env.PORT;
app.listen(port,()=>{
    
    console.log(`Port is listening on port ${port}`)
})


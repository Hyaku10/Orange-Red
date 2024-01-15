import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
dotenv.config();
import login from './routers/login.js';
import add_user from './routers/add_user.js';
import get_user from './routers/get_user.js';
import add_order from './routers/add_order.js';
import get_orders from './routers/get_orders.js';
import edit_product from './routers/edit_product.js';
import add_paramObj from './routers/add_paramObj.js';
import all_products from './routers/all_products.js';
import edit_cartItem from './routers/edit_cartItem.js';
import all_param_objs from './routers/all_param_objs.js';
import delete_product from './routers/delete_product.js';
import delete_params_obj from './routers/delete_params_obj.js';
import add_ublic_param_obj from './routers/add_public_param_obj.js';
const app = express();
app.use(express.json());
app.use(cors());
//#region routers
app.use('/login', login);
app.use('/add_user', add_user);
app.use('/get_user', get_user);
app.use('/add_order', add_order);
app.use('/get_orders', get_orders);
app.use('/all_products', all_products);
app.use('/edit_product', edit_product);
app.use('/add_paramObj', add_paramObj);
app.use('/edit_cartItem', edit_cartItem);
app.use('/all_param_objs', all_param_objs);
app.use('/delete_product', delete_product);
app.use('/delete_params_obj', delete_params_obj);
app.use('/add_ublic_param_obj', add_ublic_param_obj);
app.use('/', (req, res) => {
    res.status(404).send('endpoint not supported');
});
//#endregion
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;
const db_url = process.env.DB_URL;
mongoose.connect(db_url)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB Atlas:", err));
app.listen(port, () => {
    console.log(`Server listening at http://${host}:${port}`);
});

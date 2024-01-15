import mongoose from "mongoose";
const product = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image_id: String,
});
export default mongoose.model('product', product);

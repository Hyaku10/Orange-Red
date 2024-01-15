import mongoose from "mongoose";
const order = new mongoose.Schema({
    user: mongoose.SchemaTypes.ObjectId,
    items: [{
            product: mongoose.SchemaTypes.ObjectId,
            amount: Number
        }],
    city: String,
    street: String,
    date: Date,
    price: Number
});
export default mongoose.model('order', order);

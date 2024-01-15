import mongoose from "mongoose";
const cartItem = new mongoose.Schema({
    product: [mongoose.SchemaTypes.ObjectId],
    amount: Number,
});
export default mongoose.model('cartItem', cartItem);

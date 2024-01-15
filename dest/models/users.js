import mongoose from "mongoose";
const user = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    admin: Boolean,
    gameData: Object
});
export default mongoose.model('user', user);

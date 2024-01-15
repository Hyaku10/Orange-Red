import mongoose from "mongoose";
const publicParamObj = new mongoose.Schema({
    image: String,
    name: String,
    SPEED: Number,
    SIZE: Number,
    CIRCLE: Boolean,
    BORDER: Number,
    ANGLE: Number,
    GREYSCALE: Boolean,
    //OSCILLATE (boolean)
    oscillate_size: Boolean,
    oscillate_speed: Boolean,
    oscillate_angle: Boolean,
    //CHANGE RATE (num)
    RGB_change_rate: Number,
    size_change_rate: Number,
    speed_change_rate: Number,
    angle_change_rate: Number,
    //MAX MIN (num)
    max_size: Number,
    min_size: Number,
    max_speed: Number,
    min_speed: Number,
    max_angle: Number,
    min_angle: Number
});
export default mongoose.model('publicParamObj', publicParamObj);

import mongoose from "mongoose"
import Iuser from '../interfaces/user.js'

const user = new mongoose.Schema<Iuser>({
    username : String,
    email : String,
    password : String,
    admin : Boolean,
    gameData : Object
})

export default mongoose.model<Iuser>('user', user)

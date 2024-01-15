import IcartItem from '../interfaces/paramObj.js'
import ParamObj from '../models/paramObj.js'
import { Document } from 'mongoose'
import mongoose from 'mongoose'

export const addParamObj = async (doc: any) : Promise<any> => {
    const psrmObj = new ParamObj(doc)
    return await psrmObj.save()
}

export const allParamObjs = async () => {
    try {
        return await ParamObj.find()
    } catch (error) {
        console.log(error)
    }
}

export const findParamObj = async (id : string) => {
    try {
        return await ParamObj.findById(id)
    } catch (error) {
        console.log(error)
    }
}

// export const findCartItemByProduct = async (product : any) => {
//     try {
//         const validProductId = new mongoose.Types.ObjectId(product)
//         return await CartItem.findById({'product' : validProductId})
//     } catch (error) {
//         console.log(error)
//     }
// }

export const deleteParamObj = async (id : any) => {
    try {
        return await ParamObj.deleteOne({_id: id})
    } catch (error) {
        console.log(error)
    }
}
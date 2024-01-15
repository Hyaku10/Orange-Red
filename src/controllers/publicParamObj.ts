import IpublicParamObj from '../interfaces/publicParamObj.js'
import PublcParamObj from '../models/publicParamObj.js'
import { Document } from 'mongoose'

export const addPublicParamObj = async (doc : IpublicParamObj) : Promise<IpublicParamObj> => {
    const publicParamObj = new PublcParamObj(doc)
    return await publicParamObj.save()
}

export const findPUblicParamObj = async (id : any) : Promise<IpublicParamObj> => {
    try {
        const publicParamObj = await PublcParamObj.findById(id)
        return publicParamObj!
    } catch (error) {
        console.log(error)
        throw new Error(`Error finding product with id ${id}`)
    }
}

export const allPublicParamObjs = async () => {
    try {
        return await PublcParamObj.find()
    } catch (error) {
        console.log(error)
    }
}
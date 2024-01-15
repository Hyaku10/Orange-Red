import IpublicParamObj from './publicParamObj.js'
import Iuser from './user.js'
export default interface Iorder {
    user : Iuser,
    items: [{
        product : IpublicParamObj,
        amount : number
    }],
    city: string,
    street: string,
    date: Date,
    price: number
}
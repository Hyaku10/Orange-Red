import {Router, Request, Response} from 'express'
import { findParamObj } from '../controllers/paramObj.js'
import { addOrder } from '../controllers/order.js'
import { findPUblicParamObj } from '../controllers/publicParamObj.js'
import authenticateToken from '../middlewares/authenticateToken.js'

const router : Router = Router()

router.post('/',[authenticateToken] ,async (req : Request, res : Response) => {
    try {
        const user = res.locals.user
        const {_id, cart, city, street} = user
        const {} = req.body
        const date = new Date
        let price = 0
        const items: any[] = []
        for (const cartItemId of cart){
            const cartItem: any = await findParamObj(cartItemId)
            const product: any = await findPUblicParamObj(cartItem.product)
            const sum = product.price*cartItem.amount
            price += sum
            const item = {product : cartItem.product, amount : cartItem.amount}
            items.push(item)
        }
        const doc = {
            user : _id,
            items : items,
            city : city,
            street : street,
            date : date,
            price : parseFloat(price.toFixed(2))
        }
        const order = await addOrder(doc)
        res.send('success')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router
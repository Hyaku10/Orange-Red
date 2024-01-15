import {Router, Request, Response} from 'express'
import { findParamObj } from '../controllers/paramObj.js'
import { findProduct, allProducts } from '../controllers/publicParamObj.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import cartItems from '../models/paramObj.js'

const router : Router = Router()

const extractId = (mongoObjectId: any) => {
    const idString = mongoObjectId.toString();
    const id = idString.slice(idString.indexOf('"') + 1, idString.length);
    return id;
  }

router.get('/', [authenticateToken], async (req : Request, res : Response) => {
    try {
        const user = res.locals.user
        if (!user.gameData.dyan){
          return res.send(null)
        }
        const params = user.gameData.dyan.params
        if (!params.length){
            return res.send(null)
        }
        // for (const item of userCart){
        //     const cartItem = await findParamObj(item._id)
        //     const productId = extractId(cartItem!.product)
        //     const product = await findProduct(productId)
        //     const newItem = {
        //         name: product.name,
        //         price: product.price,
        //         image_id: product.image_id,
        //         amount: cartItem!.amount,
        //         product: cartItem!.product
        //     }
        //     response.push(newItem)
        // }
        return res.send(params)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from 'express';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = Router();
const extractId = (mongoObjectId) => {
    const idString = mongoObjectId.toString();
    const id = idString.slice(idString.indexOf('"') + 1, idString.length);
    return id;
};
router.get('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        if (!user.gameData.dyan) {
            return res.send(null);
        }
        const params = user.gameData.dyan.params;
        if (!params.length) {
            return res.send(null);
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
        return res.send(params);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}));
export default router;

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
import { findParamObj } from '../controllers/paramObj.js';
import { addOrder } from '../controllers/order.js';
import { findPUblicParamObj } from '../controllers/publicParamObj.js';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = Router();
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const { _id, cart, city, street } = user;
        const {} = req.body;
        const date = new Date;
        let price = 0;
        const items = [];
        for (const cartItemId of cart) {
            const cartItem = yield findParamObj(cartItemId);
            const product = yield findPUblicParamObj(cartItem.product);
            const sum = product.price * cartItem.amount;
            price += sum;
            const item = { product: cartItem.product, amount: cartItem.amount };
            items.push(item);
        }
        const doc = {
            user: _id,
            items: items,
            city: city,
            street: street,
            date: date,
            price: parseFloat(price.toFixed(2))
        };
        const order = yield addOrder(doc);
        res.send('success');
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

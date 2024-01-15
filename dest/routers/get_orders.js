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
import { findOrdersByUser } from '../controllers/order.js';
import { findPUblicParamObj } from '../controllers/publicParamObj.js';
import { findUserById } from '../controllers/user.js';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = Router();
router.get('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const id = user._id;
        const newArr = [];
        const allOrders = yield findOrdersByUser(id);
        if (!allOrders) {
            res.send([]);
        }
        for (const i of allOrders) {
            const user = yield findUserById(i.user);
            const order = {
                user: user,
                items: [],
                city: i.city,
                street: i.street,
                date: i.date,
                price: i.price
            };
            for (const item of i.items) {
                const product = yield findPUblicParamObj(item.product);
                const newItem = {
                    product: product,
                    amount: item.amount
                };
                order.items.push(newItem);
            }
            newArr.push(order);
        }
        return res.send(newArr);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}));
export default router;

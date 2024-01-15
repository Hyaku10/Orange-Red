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
import { addProduct } from '../controllers/product.js';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = Router();
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (res.locals.admin !== 'admin') {
            return res.status(403).send();
        }
        const { name, description, price, image_id } = req.body;
        const doc = {
            name: name,
            description: description,
            price: price,
            image_id: image_id,
        };
        const product = yield addProduct(doc);
        res.send();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

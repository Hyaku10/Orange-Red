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
import product from '../models/publicParamObj.js';
const router = Router();
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (res.locals.admin !== 'admin') {
            return res.status(403).send();
        }
        const { name, target, value } = req.body;
        const thisProduct = yield product.findOne({ 'name': name });
        if (thisProduct === null) {
            res.status(500).send();
        }
        // switch (target) {
        //     case 'name':
        //         thisProduct!.name = value
        //         break;
        //     case 'description':
        //         thisProduct!.description = value
        //         break;
        //     case 'price':
        //         thisProduct!.price = value
        //         break;
        //     case 'image_id':
        //         thisProduct!.image_id = value
        //         break;
        //     default:
        //         break;
        // }
        yield (thisProduct === null || thisProduct === void 0 ? void 0 : thisProduct.save());
        res.send();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

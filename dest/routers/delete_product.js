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
import publcParamObj from '../models/publicParamObj.js';
const router = Router();
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (res.locals.admin !== 'admin') {
            return res.status(403).send();
        }
        const { name } = req.body;
        const del = yield publcParamObj.deleteOne({ 'name': name });
        res.locals.del = del;
        res.send();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

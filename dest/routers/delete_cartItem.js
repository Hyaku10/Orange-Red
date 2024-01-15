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
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //setup
        const user = res.locals.user;
        const { idToDelete } = req.body;
        const userParams = user.gameData.dyan.params;
        if (!userParams.length) {
            return res.send(null);
        }
        const newParams = userParams.filter(obj => obj._id !== idToDelete);
        //delete references
        // for (const i of userParams){
        //     const cartItem = userParams(i._id)
        //     const productId = await extractId(cartItem!.product)
        //     if(product !== productId){
        //         const remainingCartItem = await extractId(cartItem!._id)
        //         newParams.push(remainingCartItem)
        //     }else{
        //         await deleteParamObj(i!._id)
        //     }
        // }
        user.gameData.dyan.params = newParams;
        yield user.save();
        return res.send(newParams);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}));
export default router;

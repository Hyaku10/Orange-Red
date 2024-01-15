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
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const idToDelete = req.body.id;
        const userParams = user.gameData.dyan.params;
        if (!userParams.length) {
            return res.send(null);
        }
        const newParams = userParams.filter(obj => obj._id !== idToDelete);
        user.gameData.dyan.params = newParams;
        user.markModified('gameData');
        yield user.save();
        return res.send(newParams);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}));
export default router;

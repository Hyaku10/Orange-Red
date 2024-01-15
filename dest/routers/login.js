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
import checkLogin from '../middlewares/checkLogin.js';
import generateJwt from '../middlewares/generateJwt.js';
import { findUserByEmail } from '../controllers/user.js';
const router = Router();
router.post('/', [checkLogin, generateJwt], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield findUserByEmail(req.body.email);
        const username = user[0].username;
        return res.send({ token: res.locals.jwt, admin: res.locals.admin, username: username });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

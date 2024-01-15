var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pkg from 'bcryptjs';
import { findUserByEmail } from '../controllers/user.js';
const { compare } = pkg;
export default (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user0 = yield findUserByEmail(req.body.email);
        const user = user0[0];
        if (!user) {
            return res.status(404).send('email not registered');
        }
        const userData = {
            email: user.email,
            password: user.password,
            admin: user.admin
        };
        res.locals.user = userData;
        if (res.locals.user.admin) {
            res.locals.admin = 'admin';
            return next();
        }
        const isValid = yield compare(req.body.password, res.locals.user.password);
        if (!isValid) {
            res.locals.admin = 'logged_out';
            return res.status(401).send('username or password is incorrect');
        }
        res.locals.admin = 'user';
        return next();
    }
    catch (error) {
        return res.status(500).send(error);
    }
});

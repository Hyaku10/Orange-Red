var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import users from '../models/users.js';
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield users.find();
});
export default (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.sendStatus(401);
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.sendStatus(401);
        }
        const key = process.env.JWT_KEY;
        if (!key) {
            return res.sendStatus(401);
        }
        jwt.verify(token, key, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            const { email } = decoded;
            const users = yield getUsers();
            for (const user of users) {
                if (user.email === email) {
                    res.locals.user = user;
                    if (user.admin) {
                        res.locals.admin = 'admin';
                        return next();
                    }
                    res.locals.admin = 'user';
                    return next();
                }
            }
            res.locals.admin = 'logged_out';
            return next();
        }));
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

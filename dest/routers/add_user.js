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
import { addUser } from '../controllers/user.js';
import passwordEncryptor from '../middlewares/passwordEncryptor.js';
import passwordValidation from '../middlewares/passwordValidation.js';
import registerValidation from '../middlewares/registerValidation.js';
import userMatchedData from '../middlewares/userMatchedData.js';
import userUniqueValidator from '../middlewares/userUniqueValidator.js';
const router = Router();
router.post('/', [userMatchedData, passwordValidation, userUniqueValidator, registerValidation, passwordEncryptor], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email } = req.body;
        const password = res.locals.password;
        const doc = {
            username: username,
            email: email,
            password: password,
            admin: false,
            gameData: { registrationDate: new Date() }
        };
        const user = yield addUser(doc);
        res.send();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

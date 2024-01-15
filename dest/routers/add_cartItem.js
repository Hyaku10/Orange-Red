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
import { addParamObj } from '../controllers/paramObj.js';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = Router();
const extractId = (mongoObjectId) => {
    const idString = mongoObjectId.toString();
    const id = idString.slice(idString.indexOf('"') + 1, idString.length);
    return id;
};
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = res.locals.user;
        const { speed, size, circle, border, angle, greyscale, oscillate_size, oscillate_speed, oscillate_angle, rgb_change_rate, size_change_rate, speed_change_rate, angle_change_rate, max_size, min_size, max_speed, min_speed, max_angle, min_angle } = req.body;
        const doc = {
            SPEED: speed,
            SIZE: size,
            CIRCLE: circle,
            BORDER: border,
            ANGLE: angle,
            GREYSCALE: greyscale,
            //OSCILLATE (boolean)
            oscillate_size: oscillate_size,
            oscillate_speed: oscillate_speed,
            oscillate_angle: oscillate_angle,
            //CHANGE RATE (num)
            RGB_change_rate: rgb_change_rate,
            size_change_rate: size_change_rate,
            speed_change_rate: speed_change_rate,
            angle_change_rate: angle_change_rate,
            //MAX MIN (num)
            max_size: max_size,
            min_size: min_size,
            max_speed: max_speed,
            min_speed: min_speed,
            max_angle: max_angle,
            min_angle: min_angle
        };
        const item = yield addParamObj(doc);
        if (user.gameData.dyan) {
            const oldData = user.gameData.dyan;
            const newData = oldData.concat([item]);
            user.gameData.dyan = newData;
            yield user.save();
            res.send(user);
        }
        user.gameData.dyan = item;
        yield user.save();
        res.send(user);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

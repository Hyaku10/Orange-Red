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
import { addPublicParamObj } from '../controllers/publicParamObj.js';
import authenticateToken from '../middlewares/authenticateToken.js';
const router = Router();
router.post('/', [authenticateToken], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (res.locals.admin !== 'admin') {
            return res.status(403).send();
        }
        const { name, image, SPEED, SIZE, CIRCLE, BORDER, ANGLE, GREYSCALE, oscillate_size, oscillate_speed, oscillate_angle, RGB_change_rate, size_change_rate, speed_change_rate, angle_change_rate, max_size, min_size, max_speed, min_speed, max_angle, min_angle } = req.body.params;
        const doc = {
            name: name,
            image: image,
            SPEED: SPEED,
            SIZE: SIZE,
            CIRCLE: CIRCLE,
            BORDER: BORDER,
            ANGLE: ANGLE,
            GREYSCALE: GREYSCALE,
            //OSCILLATE (boolean)
            oscillate_size: oscillate_size,
            oscillate_speed: oscillate_speed,
            oscillate_angle: oscillate_angle,
            //CHANGE RATE (num)
            RGB_change_rate: RGB_change_rate,
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
        const product = yield addPublicParamObj(doc);
        res.send();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));
export default router;

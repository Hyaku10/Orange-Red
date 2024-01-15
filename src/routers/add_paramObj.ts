import {Router, Request, Response} from 'express'
import { addParamObj } from '../controllers/paramObj.js'
import authenticateToken from '../middlewares/authenticateToken.js'
import { findParamObj } from '../controllers/paramObj.js'
import { v4 as uuidv4 } from 'uuid'

const router : Router = Router()

const extractId = (mongoObjectId: any) => {
    const idString = mongoObjectId.toString();
    const id = idString.slice(idString.indexOf('"') + 1, idString.length);
    return id;
  }

router.post('/',[authenticateToken] ,async (req : Request, res : Response) => {
    try {
        const user = res.locals.user
        const {image, SPEED, SIZE, CIRCLE, BORDER, ANGLE, GREYSCALE, oscillate_size, oscillate_speed,
               oscillate_angle, RGB_change_rate, size_change_rate, speed_change_rate, angle_change_rate,
               max_size, min_size, max_speed, min_speed, max_angle, min_angle} = req.body.params
        const doc = {
            _id : uuidv4(),
            image : image,
            SPEED : SPEED, 
            SIZE : SIZE, 
            CIRCLE : CIRCLE,
            BORDER : BORDER,
            ANGLE : ANGLE,
            GREYSCALE : GREYSCALE,
            //OSCILLATE (boolean)
            oscillate_size : oscillate_size,
            oscillate_speed : oscillate_speed,
            oscillate_angle : oscillate_angle,
            //CHANGE RATE (num)
            RGB_change_rate : RGB_change_rate, 
            size_change_rate : size_change_rate,
            speed_change_rate : speed_change_rate,
            angle_change_rate : angle_change_rate,
            //MAX MIN (num)
            max_size : max_size, 
            min_size : min_size,
            max_speed : max_speed, 
            min_speed : min_speed, 
            max_angle: max_angle,
            min_angle : min_angle
        }
        if (!user.gameData.dyan) {
            user.set('gameData.dyan', { params: [doc] })
        } else {
            user.gameData.dyan.params.push(doc)
            user.set('gameData.dyan.params', user.gameData.dyan.params)
        }
        user.markModified('gameData')
        await user.save()
        res.send(user)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router
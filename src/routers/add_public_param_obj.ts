import {Router, Request, Response} from 'express'
import {addPublicParamObj} from '../controllers/publicParamObj.js'
import authenticateToken from '../middlewares/authenticateToken.js'

const router : Router = Router()

router.post('/',[authenticateToken] ,async (req : Request, res : Response) => {
    try {
        if(res.locals.admin !== 'admin'){
            return res.status(403).send()
        }
        const {name, image, SPEED, SIZE, CIRCLE, BORDER, ANGLE, GREYSCALE, oscillate_size, oscillate_speed,
            oscillate_angle, RGB_change_rate, size_change_rate, speed_change_rate, angle_change_rate,
            max_size, min_size, max_speed, min_speed, max_angle, min_angle} = req.body.params
     const doc = {
         name : name,
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
        const product = await addPublicParamObj(doc)
        res.send()
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router
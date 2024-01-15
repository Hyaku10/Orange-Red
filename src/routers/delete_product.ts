import {Router, Request, Response} from 'express'
import authenticateToken from '../middlewares/authenticateToken.js'
import publcParamObj from '../models/publicParamObj.js'

const router : Router = Router()

router.post('/' ,[authenticateToken],async (req : Request, res : Response) => {
    try {
        if(res.locals.admin !== 'admin'){
            return res.status(403).send()
        }
        const {name} = req.body
        const del = await publcParamObj.deleteOne({'name' : name})
        res.locals.del = del
        res.send()
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router
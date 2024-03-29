import {Router, Request, Response} from 'express'
import { findUserByEmail } from '../controllers/user.js'

const router : Router = Router()

router.get('/:id', async (req : Request, res : Response) => {
    try {
        const response = await findUserByEmail(req.params.id)
        if (response?.length === 0){
            return res.sendStatus(404)
        }
        return res.send(response)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router
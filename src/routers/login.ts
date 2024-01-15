import {Router, Request, Response} from 'express'
import checkLogin from '../middlewares/checkLogin.js'
import generateJwt from '../middlewares/generateJwt.js'
import { findUserByEmail } from '../controllers/user.js'
import Iuser from '../interfaces/user.js'

const router : Router = Router()

router.post('/',[checkLogin, generateJwt], async (req : Request, res : Response) => {
    try {
        const user = await findUserByEmail(req.body.email)
        const username = user[0].username
        return res.send({ token: res.locals.jwt, admin: res.locals.admin, username: username })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router
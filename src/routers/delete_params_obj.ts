import {Router, Request, Response} from 'express'
import authenticateToken from '../middlewares/authenticateToken.js'

const router : Router = Router()

router.post('/', [authenticateToken], async (req : Request, res : Response) => {
    try {
        const user = res.locals.user
        const idToDelete = req.body.id
        const userParams = user.gameData.dyan.params
        if (!userParams.length){
            return res.send(null)
        }
        const newParams = userParams.filter(obj => obj._id !== idToDelete)
        user.gameData.dyan.params = newParams
        user.markModified('gameData')
        await user.save()
        return res.send(newParams)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

export default router
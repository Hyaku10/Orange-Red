import {Router, Request, Response} from 'express'
import {addUser} from '../controllers/user.js'
import passwordEncryptor from '../middlewares/passwordEncryptor.js'
import passwordValidation from '../middlewares/passwordValidation.js'
import registerValidation from '../middlewares/registerValidation.js'
import userMatchedData from '../middlewares/userMatchedData.js'
import userUniqueValidator from '../middlewares/userUniqueValidator.js'

const router : Router = Router()

router.post('/',[userMatchedData ,passwordValidation ,userUniqueValidator ,registerValidation ,passwordEncryptor] ,async (req : Request, res : Response) => {
    try {
        const {username, email} = req.body
        const password = res.locals.password
        const doc = {
            username : username,
            email : email,
            password : password,
            admin : false,
            gameData : {registrationDate: new Date()}
        }
        const user = await addUser(doc)
        res.send()
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

export default router
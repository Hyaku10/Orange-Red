import { NextFunction, Request, Response } from "express"

export default async (req: Request, res: Response, next: NextFunction) => {
    for(const key in req.body){
        if(!['username', 'email', 'password', 'admin', 'gamedata'].includes(key)){
            return res.status(400).send(`invalid property ${key}`)
        }
    }
    next()
}
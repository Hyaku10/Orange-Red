var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    for (const key in req.body) {
        if (!['username', 'email', 'password', 'admin', 'gamedata'].includes(key)) {
            return res.status(400).send(`invalid property ${key}`);
        }
    }
    next();
});

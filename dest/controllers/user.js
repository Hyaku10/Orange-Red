var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from '../models/users.js';
export const addUser = (doc) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User(doc);
    return yield user.save();
});
export const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield User.find();
    }
    catch (error) {
        console.log(error);
    }
});
export const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield User.find({ email: email });
    }
    catch (error) {
        console.log(error);
    }
});
export const findUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(id);
        return user;
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error finding user with id ${id}`);
    }
});

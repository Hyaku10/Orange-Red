var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PublcParamObj from '../models/publicParamObj.js';
export const addProduct = (doc) => __awaiter(void 0, void 0, void 0, function* () {
    const publicParamObj = new PublcParamObj(doc);
    return yield publicParamObj.save();
});
export const findProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield PublcParamObj.findById(id);
        return product;
    }
    catch (error) {
        console.log(error);
        throw new Error(`Error finding product with id ${id}`);
    }
});
export const allProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield PublcParamObj.find();
    }
    catch (error) {
        console.log(error);
    }
});

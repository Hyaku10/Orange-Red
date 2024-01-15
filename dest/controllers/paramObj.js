var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ParamObj from '../models/paramObj.js';
export const addParamObj = (doc) => __awaiter(void 0, void 0, void 0, function* () {
    const psrmObj = new ParamObj(doc);
    return yield psrmObj.save();
});
export const allParamObjs = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield ParamObj.find();
    }
    catch (error) {
        console.log(error);
    }
});
export const findParamObj = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield ParamObj.findById(id);
    }
    catch (error) {
        console.log(error);
    }
});
// export const findCartItemByProduct = async (product : any) => {
//     try {
//         const validProductId = new mongoose.Types.ObjectId(product)
//         return await CartItem.findById({'product' : validProductId})
//     } catch (error) {
//         console.log(error)
//     }
// }
export const deleteParamObj = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield ParamObj.deleteOne({ _id: id });
    }
    catch (error) {
        console.log(error);
    }
});

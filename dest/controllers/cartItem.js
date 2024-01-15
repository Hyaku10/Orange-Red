var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CartItem from '../models/cartItems.js';
import mongoose from 'mongoose';
export const addCartItem = (doc) => __awaiter(void 0, void 0, void 0, function* () {
    const cartItem = new CartItem(doc);
    return yield cartItem.save();
});
export const allCartItems = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield CartItem.find();
    }
    catch (error) {
        console.log(error);
    }
});
export const findCartItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield CartItem.findById(id);
    }
    catch (error) {
        console.log(error);
    }
});
export const findCartItemByProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validProductId = new mongoose.Types.ObjectId(product);
        return yield CartItem.findById({ 'product': validProductId });
    }
    catch (error) {
        console.log(error);
    }
});
export const deleteCartItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield CartItem.deleteOne({ _id: id });
    }
    catch (error) {
        console.log(error);
    }
});

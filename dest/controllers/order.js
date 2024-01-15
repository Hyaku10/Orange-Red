var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Order from '../models/order.js';
import mongoose from 'mongoose';
export const addOrder = (doc) => __awaiter(void 0, void 0, void 0, function* () {
    const order = new Order(doc);
    return yield order.save();
});
export const allOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Order.find();
    }
    catch (error) {
        console.log(error);
    }
});
export const findOrder = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Order.findById({ 'user': userId });
    }
    catch (error) {
        console.log(error);
    }
});
export const findOrdersByUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validProductId = new mongoose.Types.ObjectId(user);
        return yield Order.find({ 'user': validProductId });
    }
    catch (error) {
        console.log(error);
    }
});

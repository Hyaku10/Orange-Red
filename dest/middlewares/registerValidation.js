import { body } from 'express-validator';
const formValidator = [
    body('email').isEmail().withMessage('email is invalid')
];
export default formValidator;

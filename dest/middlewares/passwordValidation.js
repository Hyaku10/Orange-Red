import PasswordValidator from 'password-validator';
const schema = new PasswordValidator();
schema
    .is().min(8)
    .is().max(14)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces();
export default (req, res, next) => {
    try {
        const validationErrors = schema.validate(req.body.password);
        console.log(validationErrors);
        if (validationErrors) {
            return next();
        }
        return res.status(403).send('invalid password');
    }
    catch (error) {
        return res.status(400).send();
    }
};

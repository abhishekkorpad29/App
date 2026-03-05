import { Request, Response, NextFunction } from "express";
import {
    validateName,
    validateEmail,
    validateContact,
    validatePassword
} from "../../infrastructure/utils/validators/user.validators";

export const validateSignup = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { name, email, password, contact_number } = req.body;

    const errors: Record<string, string> = {};

    const nameError = validateName(name);
    if (nameError) errors.name = nameError;

    const emailError = validateEmail(email);
    if (emailError) errors.email = emailError;

    const contactError = validateContact(contact_number);
    if (contactError) errors.contact_number = contactError;

    const passwordError = validatePassword(password);
    if (passwordError) errors.password = passwordError;

    if (Object.keys(errors).length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    next();
};
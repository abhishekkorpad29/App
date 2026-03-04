// Name Validator
export const validateName = (name: any): string | null => {

    if (typeof name !== "string")
        return "Name must be a string";

    const trimmed = name.trim();

    if (!trimmed)
        return "Name is required";

    if (trimmed.length < 3)
        return "Name must be at least 3 characters";

    if (!/^[A-Za-z\s]+$/.test(trimmed))
        return "Name must contain only letters";

    return null;
};


// Email Validator
export const validateEmail = (email: any): string | null => {

    if (typeof email !== "string")
        return "Email must be a string";

    const normalized = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalized)
        return "Email is required";

    if (!emailRegex.test(normalized))
        return "Invalid email format";

    return null;
};


// Contact Validator
export const validateContact = (contact: any): string | null => {

    if (typeof contact !== "string")
        return "Contact number must be a string";

    const cleaned = contact.replace(/\s+/g, "");

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!cleaned)
        return "Contact number is required";

    if (!mobileRegex.test(cleaned))
        return "Invalid Indian mobile number";

    return null;
};


// Strong Password Validator
export const validatePassword = (password: any): string | null => {

    if (typeof password !== "string")
        return "Password must be a string";

    if (!password)
        return "Password is required";

    if (password.length < 8)
        return "Password must be at least 8 characters";

    if (!/[A-Z]/.test(password))
        return "Must contain one uppercase letter";

    if (!/[a-z]/.test(password))
        return "Must contain one lowercase letter";

    if (!/[0-9]/.test(password))
        return "Must contain one number";

    if (!/[@$!%*?&]/.test(password))
        return "Must contain one special character";

    return null;
};
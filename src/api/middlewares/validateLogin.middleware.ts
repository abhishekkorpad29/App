import { Request, Response, NextFunction } from "express";

export const loginValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { identifier, password } = req.body;

    if (!identifier)
        return res.status(400).json({ error: "Email or contact number is required" });

    if (!password)
        return res.status(400).json({ error: "Password is required" });

    next();
};
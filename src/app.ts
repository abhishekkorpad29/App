import express, { Request, Response } from "express";
import userRouter from "./Routes/userRoutes"
import adminRouter from "./Routes/adminRoutes"
const app = express();


app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);


app.get("/", (req: Request, res: Response) => {
    res.send("Server is running. 🚀");
});

export default app;
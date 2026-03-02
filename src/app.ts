import express from "express";
import userRoutes from "./api/routes/user.routes";
import adminRoutes from "./api/routes/admin.routes";
import { errorMiddleware } from "./api/middlewares/error.middleware";
import fileUpload from "express-fileupload";
import documentRoutes from "./api/routes/document.routes";
import path from "path";

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/documents", documentRoutes);
 app.use(errorMiddleware);

export default app;
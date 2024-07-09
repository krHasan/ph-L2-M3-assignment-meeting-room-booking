import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";
import cookieParser from "cookie-parser";
const app: Application = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.use("/api/v1", router);

app.get("/", async (req: Request, res: Response) => {
    res.send("Hello World!");
    // Promise.reject();
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

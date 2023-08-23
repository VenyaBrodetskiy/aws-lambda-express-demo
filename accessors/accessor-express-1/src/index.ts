import serverless from "serverless-http";
import express, { Request, Response, NextFunction } from "express";
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello from accessor!",
  });
});

app.get("/getdata", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Data from accessor express",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);

import serverless from "serverless-http";
import express, { Request, Response, NextFunction } from "express";
import { Lambda } from "aws-sdk";
const app = express();


app.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/call-accessor-express", async (req: Request, res: Response, next: NextFunction) => {
  const lambda = new Lambda({
    endpoint: process.env.AWS_LAMBDA_ENDPOINT || 'http://localhost:3002'
  });

  const params : Lambda.InvocationRequest = {
    FunctionName: process.env.ACCESSOR_LAMBDA_EXPRESS || 'accessor-express-dev-get-data',
    // InvocationType: 'RequestResponse',
    Payload: JSON.stringify({
      httpMethod: 'GET',
      path: '/getdata'
    }),
  };

  try {
    const response = await lambda.invoke(params).promise();
    const responseData = JSON.parse(response.Payload as string);
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error invoking accessor lambda', error);
    return res.status(500).json({
      error: "Failed to invoke accessor",
    });
  }
  
});

app.get("/call-accessor-direct-invoke", async (req: Request, res: Response, next: NextFunction) => {
  const lambda = new Lambda({
    endpoint: process.env.AWS_LAMBDA_ENDPOINT || 'http://localhost:3003'
  });

  const params = {
    FunctionName: process.env.ACCESSOR_LAMBDA_INVOKE_DIRECT || 'accessor-invoke-directly-dev-get-data',
    Payload: JSON.stringify({ path: '/getdata' })
  };

  try {
    const response = await lambda.invoke(params).promise();
    const responseData = JSON.parse(response.Payload as string);
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Error invoking accessor lambda', error);
    return res.status(500).json({
      error: "Failed to invoke accessor",
    });
  }

});

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export const handler = serverless(app);


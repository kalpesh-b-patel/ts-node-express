import express, { Request, Response } from 'express';
const app = express();

app.use(express.json());
const PORT = process.env.port || 3001;

app.use('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    data: 'Node/Express with Typescript'
  });
});

app.listen(PORT, () => { console.log(`-: Server is running on port ${PORT} :-`); });

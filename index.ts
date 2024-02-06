import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;
app.use(express.json());
app.post("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

app.post("/github-event", (req: Request, res: Response) => {
  console.log("Evento de Github");
  console.log("body de Github", req.body);
  res.status(200).json({
    sucess: true,
  });
});

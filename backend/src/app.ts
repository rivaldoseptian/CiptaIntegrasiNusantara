import dotenv from "dotenv";
import express, { Request, Response } from "express";
// import errorHandler from "./middleware/errorHandler";
import cors from "cors";
// import router from "./routes";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    response: "Express Type Script",
  });
});

// app.use(router);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

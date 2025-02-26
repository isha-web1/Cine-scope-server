import express, { Request, Response } from "express";
import cors from "cors";
import { MovieRoutes } from "./modules/movies/movie.route";
import { UserRoutes } from "./modules/user/user.route";
const app = express();

//parsers
app.use(cors());
app.use(express.json());

app.use("/api/movies", MovieRoutes);

app.use("/api/users",UserRoutes );

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

export default app;

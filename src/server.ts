import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const port = 4003;
const url = `http://localhost:${port}`;

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.listen(port, () =>
  console.log(`Application is running! Access URL: ${url}`)
);

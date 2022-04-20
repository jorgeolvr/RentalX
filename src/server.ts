import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const port = 4003;
const url = `http://localhost:${port}`;

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(port, () =>
  console.log(`Application is running! Access URL: ${url}`)
);

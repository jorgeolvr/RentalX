import express from "express";
import { router } from "./routes";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const port = 4003;
const url = `http://localhost:${port}`;

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () =>
  console.log(`Application is running! Access URL: ${url}`)
);

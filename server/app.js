import express from "express";
import cors from "cors";

import planetsRouter from "./routes/planets.router.js";
import { loadPlanetsData } from "./models/planets.model.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());

app.use(planetsRouter);

async function startServer() {
  await loadPlanetsData();
  app.listen(PORT, () => {
    console.log(`Server is running! ${PORT}`)
  });
}
startServer()
export default app;
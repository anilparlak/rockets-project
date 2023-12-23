import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

import planetsRouter from "./routes/planets.router.js";
import { loadPlanetsData } from "./models/planets.model.js";
import launchesRouter from "./routes/launches.router.js";

const PORT = process.env.PORT || 5050;
const app = express();
const currentModulePath = new URL(import.meta.url).pathname;
const currentModuleDir = path.dirname(currentModulePath);

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(currentModuleDir, "public")))

app.use(planetsRouter);
app.use(launchesRouter)
app.get("/*",(req, res) => {
  res.sendFile(path.join(currentModuleDir, "public", "index.html"))
})
async function startServer() {
  await loadPlanetsData();
  app.listen(PORT, () => {
    console.log(`Server is running! ${PORT}`)
  });
}
startServer()
export default app;
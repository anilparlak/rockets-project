import express from "express";
import cors from "cors";

import planetsRouter from "./routes/planets.router.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use(planetsRouter);
 
app.listen(PORT, () => {
  console.log(`Server is running! ${PORT}`)
});
export default app;
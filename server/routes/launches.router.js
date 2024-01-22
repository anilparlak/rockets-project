import express from "express";
import { getAllLaunches, htppAddNewLaunch, httpRemoveLaunch } from "../controllers/launches.controller.js";

const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", htppAddNewLaunch);
launchesRouter.delete("/:id", httpRemoveLaunch)

export default launchesRouter;
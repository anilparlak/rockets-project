import { planets } from "../models/planets.model.js";

export const getAllPlanets = async (req, res) => {
    try {
        return await res.status(200).json(planets);
    } catch (error) {
        return await res.status(404).json({
            error: "Not found!"
        })
    }
}
import launches from "../models/launches.model.js";

export const getAllLaunches = async (req, res) => {
    try {
        return await res.status(200).json([launches]);
    } catch (error) {
        return await res.status(404).json({
            error: "Not found!"
        })
    }
}
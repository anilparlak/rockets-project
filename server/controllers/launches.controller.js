import {getLaunches, addNewLaunch, removeLaunch} from "../models/launches.model.js";

export const getAllLaunches = async (req, res) => {
    try {
        return await res.status(200).json(getLaunches());
    } catch (error) {
        return await res.status(404).json({
            error: "Not found!"
        })
    }
};

export const htppAddNewLaunch = (req, res) => {
    const {launch} = req.body;
    if(!launch.mission || !launch.launchDate || !launch.rocket || !launch.target) {
        return res.status(400).json({
            error: 'Missing required launch property'
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid date format'
        })
    }

    addNewLaunch(launch);

    return res.status(201).json(launch);
}

export const httpRemoveLaunch = (req, res) => {
    const id = req.params.id;
    if(!id) {
        return res.status(400).json({
            error: 'Invalid id'
        })
    }

    const updatedLaunchesList = removeLaunch(id);
    return res.status(200).json(updatedLaunchesList);
}
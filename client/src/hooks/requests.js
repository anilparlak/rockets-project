import axios from "axios";
import { BASE_URL } from "../config";

async function httpGetPlanets() {
  const response = await axios.get(`${BASE_URL}/planets`);
  return response?.data;
}

async function httpGetLaunches() {
  const response = await axios.get(`${BASE_URL}/launches`);
  const fetchedLaunches = response?.data;
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
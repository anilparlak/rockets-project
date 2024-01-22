import axios from "axios";
import { BASE_URL } from "../config";

async function httpGetPlanets() {
  const response = await axios.get(`${BASE_URL}/planets`);
  return response?.data;
}

async function httpGetLaunches() {
  const response = await axios.get(`${BASE_URL}/launches`);
  console.log("response",response)
  const fetchedLaunches = response?.data;
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
 try {
  const response = await axios.post(`${BASE_URL}/launches`, {
    launch
  });
  return response?.data;
 } catch (error) {
    return false
 }
}

async function httpAbortLaunch(id) {
  // Delete launch with given ID.
  try {
    const response = await axios.delete(`${BASE_URL}/launches/${id}`);
    return response?.data
  } catch (error) {
    console.error("Delete request failed with error:", error);
    return false;
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
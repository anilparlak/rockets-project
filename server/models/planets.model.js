import {parse} from "csv-parse";
import fs from "fs"
import path from "path";

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

export function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    const currentModulePath = new URL(import.meta.url).pathname;
    const currentModuleDir = path.dirname(currentModulePath);
    fs.createReadStream(path.join(currentModuleDir, "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(
          habitablePlanets.map((planet) => {
            return planet["kepler_name"];
          })
        );
        console.log(`${habitablePlanets.length} habitable planets found!`);
        resolve()
      });
  });
}

function getHabitablePlanets() {
  return habitablePlanets;
};

export default getHabitablePlanets;

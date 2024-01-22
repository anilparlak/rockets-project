const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',    
    customers: ['SpaceX', 'Nasa'],
    upcoming: true,
    success: true
};

let launchArray = [launch];
launches.set(launch.flightNumber, launch);
export function getLaunches() {
    return launchArray;
};

export function addNewLaunch(launch) {
    latestFlightNumber++;
    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers:['Parlak', 'Nasa'],
        flightNumber: latestFlightNumber
    });
    launchArray.push(newLaunch); 
    // launches.set(latestFlightNumber, Object.assign(launch, {
    //     success: true,
    //     upcoming: true,
    //     customers:['Parlak', 'Nasa'],
    //     fligthNumber: latestFlightNumber
    // }))
};

export function removeLaunch(id) {
    const updatedLaunchArray = launchArray.filter((item) => item.flightNumber != id);
    launchArray = updatedLaunchArray;
    return updatedLaunchArray;
}
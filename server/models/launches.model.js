const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    fligthNumber: 100,
    mission: "Kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customers: ['SpaceX', 'Nasa'],
    upcoming: true,
    success: true
};

launches.set(launch.fligthNumber, launch);

function getLaunches() {
    return launches;
};

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        success: true,
        upcoming: true,
        customers:['Parlak', 'Nasa'],
        fligthNumber: latestFlightNumber
    }))
}
export default getLaunches;
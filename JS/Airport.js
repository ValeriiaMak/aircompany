const PassengerPlane = require('./planes/PassengerPlane');
const MilitaryPlane = require('./planes/MilitaryPlane');
const MilitaryType = require('./models/MilitaryType');
const experimentalPlane = require('./planes/ExperimentalPlane');

class Airport {
    constructor(planes) {
        this.planes = planes;
    }
    getPassengerPlanes() {
        let PassengerPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof PassengerPlane) { PassengerPlanes.push(plane); }
        }
        return PassengerPlanes;
    }
    getMilitaryPlanes() {
        let militaryPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof MilitaryPlane) {
                militaryPlanes.push(plane);
            }
        }

        return militaryPlanes;
    }
    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let planeWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
                planeWithMaxCapacity = passengerPlanes[i];
            }
        }
        return planeWithMaxCapacity;
    }
    getTransportMilitaryPlanes() {
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() == MilitaryType.TYPE_TRANSPORT);
        }
        return transportMilitaryPlanes;
    }
    getBomberMilitaryPlanes() {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === MilitaryType.BOMBER); 
        }
        return bomberMilitaryPlanes;
    }
    getExperimentalPlanes() {
        let experimentalPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof experimentalPlane) {
                experimentalPlanes.push(plane);
            }
        }
        return experimentalPlanes;
    }
    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
        return this;
    }
    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }
    getPlanes() {
        return this.planes;
    }
    print(planes) {
        return JSON.stringify(planes);
    }
}
module.exports = Airport;

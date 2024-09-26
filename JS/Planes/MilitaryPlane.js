const plane = require('./plane');

class MilitaryPlane extends plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.militaryType = militaryType;

    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = MilitaryPlane;
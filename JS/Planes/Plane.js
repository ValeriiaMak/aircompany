class Plane {
    constructor(modelName, maxSpeed, maxFlightDistance, maxLoadCapacity) {
        this.modelName = modelName;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
    }
    getModelName() {
        return this.modelName;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }
    getMaxLoadCapacity() {
        return this.maxLoadCapacity;
    }
}
module.exports = Plane;

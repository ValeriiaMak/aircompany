const Plane = require('./plane');


class ExperimentalPlane   extends Plane
{

    constructor(modelName, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(modelName, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.modelName = modelName;
        this.maxSpeed = maxSpeed;
        this.maxFlightDistance = maxFlightDistance;
        this.maxLoadCapacity = maxLoadCapacity;
        this.type = type;
        this.classificationLevel = classificationLevel;

    }

    get modelName()
    {
        return this.modelName;
    }

    set modelName(value) {
        this._modelName = value;
    }

    get maxSpeed() {
        return this.maxSpeed;
    }

    set maxSpeed(value) {
        this._maxSpeed = value;
    }

    get maxFlightDistance() {
        return this.maxFlightDistance;
    }

    set maxFlightDistance(value) {
        this._maxFlightDistance = value;
    }

    get maxLoadCapacity() {
        return this._maxLoadCapacity;
    }

    set maxLoadCapacity(value) {
        this._maxLoadCapacity = value;
    }

    get type() {
        return this.type;
    }

    set type(value) {
        this._type = value;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }

    set classificationLevel(value) {
        this._classificationLevel = value;
    }
}

module.exports = ExperimentalPlane;
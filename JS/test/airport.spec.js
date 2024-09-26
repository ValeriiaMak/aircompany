const assert = require('chai').assert;


const MilitaryPlane = require('../planes/MilitaryPlane');
const PassengerPlane = require('../planes/PassengerPlane');
const Airport = require('../airport');
const MilitaryType = require('../models/militaryType');
const ExperimentalPlane = require('../planes/experimentalPlane');
const ExperimentalTypes = require('../models/experimentalTypes');
const ClassificationLevel = require('../models/classificationLevel');

describe('Airport Capacity', () => {
    const planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MilitaryType.BOMBER),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MilitaryType.BOMBER),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MilitaryType.BOMBER),
        new MilitaryPlane('F-15', 1500, 12000, 10000, MilitaryType.FIGHTER),
        new MilitaryPlane('F-22', 1550, 13000, 11000, MilitaryType.FIGHTER),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MilitaryType.TRANSPORT),
        new ExperimentalPlane("Bell X-14", 277, 482, 500, ExperimentalTypes.HIGH_ALTITUDE, ClassificationLevel.SECRET),
        new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, ExperimentalTypes.VTOL, ClassificationLevel.TOP_SECRET)
    ];
    const PlaneWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

    it('testGetMilitaryPlanesWithTransportType', () => {
        let airport = new Airport(planes);
        let transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of transportMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.TYPE_TRANSPORT) {
                flag = true;
                break;
            }
        }
        assert.isFalse(flag);
    });

    it('testGetPassengerPlaneWithMaxPassengersCapacity', () => {
        let airport = new Airport(planes);
        let expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse(expectedPlaneWithMaxPassengersCapacity === PlaneWithMaxPassengerCapacity);
    });

    it('testNextPlaneMaxLoadCapacityIsHigherThanCurrent', () => {
        let planesSortedByMaxLoadCapacity = new Airport(planes).sortByMaxLoadCapacity().getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMaxLoadCapacity() < nextPlane.getMaxLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isFalse(nextPlaneMaxLoadCapacityIsHigherThanCurrent);

        
    });

    it('testGetBomberMilitaryPlanes', () => {
        for (let militaryPlane of new Airport(planes).getBomberMilitaryPlanes()) {
           assert.isTrue(militaryPlane.getMilitaryType() === MilitaryType.BOMBER); 
        }
    });

    it('testClassificationLevelHigherThanUnclassifiedInExperimentalPlanes', () => {
        for (let experimentalPlane of new Airport(planes).getExperimentalPlanes()) {
            assert.isFalse(experimentalPlane.classificationLevel === ClassificationLevel.UNCLASSIFIED);
        }
    }
    );
});    
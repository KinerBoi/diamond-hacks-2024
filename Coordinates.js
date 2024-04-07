class Coordinates {
    
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.origin = new Origin(latitude, longitude);
    }

    latitudeInNorthernHemisphere(angleBetweenPolarisAndHorizon) {
        // Angle between Polaris and the horizon is the latitude
        this.latitude = angleBetweenPolarisAndHorizon;
        return this.latitude;
    }

    latitudeInSouthernHemisphere(angleBetweenSouthernCrossAndHorizon) {
        // Angle between Southern Cross and the horizon is the latitude
        this.latitude = angleBetweenSouthernCrossAndHorizon;
        return this.latitude;
    }

    calculateLongitude(primeMeridianTime, localTime) {
        // Longitude is calculated by the difference in time between the Prime Meridian
        // and traveling around 15 degrees of longitude per hour
        this.longitude = (primeMeridianTime - localTime) * 15;
        return this.longitude;
    }

    updateToNewCoordinates(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

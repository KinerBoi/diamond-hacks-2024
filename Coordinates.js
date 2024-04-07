function latitudeInNorthernHemisphere(angleBetweenPolarisAndHorizon) {
    // Angle between Polaris and the horizon is the latitude
    this.latitude = angleBetweenPolarisAndHorizon;
    return this.latitude;
}

function latitudeInSouthernHemisphere(angleBetweenSouthernCrossAndHorizon) {
    // Angle between Southern Cross and the horizon is the latitude
    this.latitude = angleBetweenSouthernCrossAndHorizon;
    return this.latitude;
}

function calculateLongitude(originalLongitude,originalLocationTime, localTime) {
    // Longitude is calculated by the difference in time between the Prime Meridian
    // and traveling around 15 degrees of longitude per hour
    if ((originalLongitude + ((originalLocationTime - localTime) * 15)) > 180) {
        this.longitude = (originalLongitude + ((originalLocationTime - localTime) * 15)) - 180
    }
    this.longitude = (originalLongitude + ((originalLocationTime - localTime) * 15));
    return this.longitude;
}


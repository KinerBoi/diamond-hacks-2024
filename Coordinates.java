public class Coordinates {

    double latitude = 0;
    double longitude = 0;

    public Coordinates(double latitude,double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    Origin origin = new Origin(latitude,longitude);
   
   
   double currentLatitude = origin.originalLatitude;
   double currentLongitude = origin.originalLongitude;
   
    public double latitude (double angleBetweenPolarisAndHorizon) {
        //angle between polaris and the horizon is the latitude latitude
        currentLatitude = angleBetweenPolarisAndHorizon;
        return currentLatitude;
    } 

    public double longitude(double primeMeridianTime, double localTime) {
        /*longitude is calculated by the differce in time between the Prime meridian 
        and 360/24 (traveling around 15 degrees of longitude per hour)
        */
        currentLongitude = (primeMeridianTime - localTime) * 15;
        return origin.originalLatitude - currentLatitude;
    }

    Coordinates currentCoordinates = new Coordinates(currentLatitude, currentLongitude);
}
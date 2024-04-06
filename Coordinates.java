public class Coordinates {

    double latitude = 0;
    double longitude = 0;

    public Coordinates(double latitude,double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    Origin origin = new Origin(latitude,longitude);
      
    public double latitude (double angleBetweenPolarisAndHorizon) {
        //angle between polaris and the horizon is the latitude latitude
        this.latitude = angleBetweenPolarisAndHorizon;
        return this.latitude;
    } 

    public double calculateLongitude(double primeMeridianTime, double localTime) {
        // Longitude is calculated by the difference in time between the Prime Meridian
        // and traveling around 15 degrees of longitude per hour
        this.longitude = (primeMeridianTime - localTime) * 15;
        return this.longitude;
    }


    public void updateToNewCoordinates(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }


}
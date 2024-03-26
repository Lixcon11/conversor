//gives a modifier based on the converter chosen 
export default function GetModif(text) {
    switch (text) {
        case "kilometersToMiles":
          return 0.621371;
        case "milesToKilometers":
          return 1.60934;
        case "feetToMeters":
          return 0.3048;
        case "metersToFeet":
          return 3.28084;
        case "centimetersToInches":
          return 0.393701;
        case "inchesToCentimeters":
          return 2.54;
        default:
          return 1;
    };
}
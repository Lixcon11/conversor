//to send back individual measures
export default function GetMeasure(text, isFirst) {
    const kilometers = "km";
    const miles = "miles";
    const feet = "feet";
    const meter = "meters";
    const centimeter = "centimeters";
    const inch = "inches";

    switch (text) {
        case "kilometersToMiles":
            if(isFirst){
                return kilometers;
            }
            else{
                return miles;
            }
          
        case "milesToKilometers":
            if(isFirst){
                return miles;
            }
            else{
                return kilometers;
            }
        case "feetToMeters":
            if(isFirst){
                return feet;
            }
            else{
                return meter;
            }
        case "metersToFeet":
            if(isFirst){
                return meter;
            }
            else{
                return feet;
            }
        case "centimetersToInches":
            if(isFirst){
                return centimeter;
            }
            else{
                return inch;
            }
        case "inchesToCentimeters":
            if(isFirst){
                return inch;
            }
            else{
                return centimeter;
            }      
        default:
          return "Error";
    };
}
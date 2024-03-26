import GetModif from "./GetModif";
//exchanges the current converter to it's opposite alogside the result and the original input
export default function ArrowButton(props){
    const click = event => {
        props.setOriginal(props.trueResult);
        const opposite = GetOpposite(props.selected);
        props.setSelected(opposite);
        props.setModif(GetModif(opposite));
    };
    return(
        <div class="side">
            <button onClick={click}>Arrows</button>
        </div>
    );
}

function GetOpposite(text){
    switch (text) {
        case "kilometersToMiles":
          return "milesToKilometers";
        case "milesToKilometers":
          return "kilometersToMiles";
        case "feetToMeters":
            return "metersToFeet";
        case "metersToFeet":
            return "feetToMeters";
        case "centimetersToInches":
            return "inchesToCentimeters";
        case "inchesToCentimeters":
            return "centimetersToInches";
        default:
          return null;
    };
}
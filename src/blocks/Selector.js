import GetModif from "./GetModif";
//to choose which coversion is wanted
export default function Selector(props) {
    const change = event => {
      props.setSelected(event.target.value);
      props.setModif(GetModif(event.target.value));
    };
    return (
        <div class="side">
        <select
        value ={props.selected}
        onChange={change}
        >
        <option value ="kilometersToMiles">Kilometers to Miles</option>
        <option value ="milesToKilometers">Miles to Kilometers</option>
        <option value ="feetToMeters">Feet to Meters</option>
        <option value ="metersToFeet">Meters to Feet</option>
        <option value ="centimetersToInches">Centimeters to Inches</option>
        <option value ="inchesToCentimeters">Inches to Centimeters</option>
      </select>
      </div>
    );
}
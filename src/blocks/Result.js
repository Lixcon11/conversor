import GetMeasure from "./GetMeasure";
//puts the result
export default function Result(props) {
    const mesure = GetMeasure(props.selected, false);
    return(
        <div>
            <h1>{props.result} {mesure}</h1>
        </div>
    );
}
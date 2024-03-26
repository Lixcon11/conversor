import GetMeasure from "./GetMeasure";
//to get the input
export default function OriginalInput(props){
    const change = event => {
        props.setOriginal(event.target.value)
    };
    const mesure = GetMeasure(props.selected, true);
    return(
        <div class="side">
            <input class ="side" type="number" onChange={change} value={props.original}/>
            <h4 class="side">{mesure}</h4>
        </div>
    );
}
import GetMeasure from "./GetMeasure";

export default function SaveButton(props){
    const addSave = () => {

        const from = GetMeasure(props.selected, true);
        const to = GetMeasure(props.selected, false);
        const original =props.original;
        const result =props.result;

        const newSave ={from, to, original, result};

        fetch("http://localhost:8000/saved/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSave)
        }).then(() =>{
            props.setOriginal(0);
            props.setRefresh(true);
        });
    }
    return(
        <button onClick={addSave}>Save</button>
    );
}
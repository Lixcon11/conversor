//default save format
export default function SavedItem({saved, setRefresh}){
    const deleteSave = () => {
        fetch("http://localhost:8000/saved/" + saved.id, {
            method: "DELETE",
        }).then(() => {
        setRefresh(true);
        });
    };
    return(
        <div>
            <h4 class="side">{saved.original} {saved.from} = {saved.result} {saved.to}</h4>
            <button onClick={deleteSave}>X</button>
        </div>
    );
}
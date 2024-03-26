import { useEffect } from "react";
import SavedItem from "./SavedItem";
import { useState } from "react";
//the list where the saved are stored
export default function SavedList({isRefresh, setRefresh}){
    const [savedOnes, setSavedOnes] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:8000/saved/")
            .then((res) => {
                return res.json();
            })
            .then((localStorage) =>{
                setRefresh(false)
                setSavedOnes(localStorage);
            })
            .catch((err) => {
                setRefresh(false)
                if (err.name === "AbortError") {
                    console.log("fetch aborted.");
                }
            });
    }, [isRefresh, setRefresh]);
    return(
        <div class="block">
            <h4>Saved</h4>
            <ul class="side">
                {savedOnes.map((saved) =>(
                    <SavedItem saved={saved} setRefresh={setRefresh}/>
                ))}
            </ul>
        </div>
    );
}
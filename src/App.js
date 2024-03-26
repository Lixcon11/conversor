import ArrowButton from './blocks/ArrowButton.js';
import OriginalInput from './blocks/OriginalInput.js';
import Result from './blocks/Result.js';
import SaveButton from './blocks/SaveButton.js';
import SavedList from './blocks/SavedList.js';
import  Selector  from "./blocks/Selector.js";
import { useState } from "react";

function App() {
  const [isRefresh,setIsRefresh] = useState(true);
  const setRefresh = (status) => {
    setIsRefresh(status);
  };
  const [selectedCoverter, setSelectedCoverter] = useState('kilometersToMiles');
  const [modif, setModif] = useState(0.621371);
  const [originalInput, setOriginalInput] = useState(0);
  const trueResult = originalInput*modif;
  const result = trueResult.toFixed(2);
  
  return (
    
      <div>
        <header>
          <div class="block">
          <Selector selected={selectedCoverter} setSelected={setSelectedCoverter} setModif={setModif}/>
          <ArrowButton  trueResult={trueResult} setOriginal={setOriginalInput} setSelected={setSelectedCoverter} selected={selectedCoverter} setModif={setModif}/>
          <OriginalInput original={originalInput} setOriginal={setOriginalInput} selected={selectedCoverter}/>
          <Result result={result} selected={selectedCoverter}/>
          <SaveButton result={result} original={originalInput} selected={selectedCoverter} setOriginal={setOriginalInput} setRefresh={setRefresh}/>
          </div>
        </header>
        <SavedList setRefresh={setRefresh} isRefresh={isRefresh}/>
      </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentSum, setCurrentSum] = useState(0);
  const [newSum, setNewSum] = useState(0);
  const [clear, setClear] = useState(false);

  // Ce qu'il se passe quand on monte la première fois le composant

  useEffect(() => {
    document.querySelector("#result").value = "";
    document.querySelector("#previousGain").value = "";
    document.querySelector("#powerGain").value = "";
  }, []);
// oui test gith
  // Et une autre fois lorsque l'on déclenche la fonction clear

  useEffect(() => {
    if (clear) document.querySelector("#result").value = "";
    document.querySelector("#previousGain").value = "";
    document.querySelector("#powerGain").value = "";
  });

  // Une fois le tableau des valeurs créees ( commentaire plus bas) modifier les valeurs de Previous
  // Gain pour le remplacer automatiquement et le garder en mémoire.
  const Add = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let anteGain = document.querySelector("#previousGain").value;
    let newGain = document.querySelector("#powerGain").value;

    //if (newGain == "") return;

    let sum = newGain - parseInt(anteGain);
    
    setCurrentSum(sum);
    setNewSum(newGain);

    document.querySelector("#previousGain").value = { newSum };
    document.querySelector("#powerGain").value = "";
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("sum:", currentSum);
    document.querySelector("form").reset();
    setClear(true);
    setCurrentSum(0);
  };

  return (
    <div className="App">
      <div className="app-title">
        <h1> Calculateur de Gains Rollercoin </h1>
      </div>
      <form className"dataForm">
        <input type="text" id="previousGain" placeholder="Gains antérieurs" />
        <input type="text" id="powerGain" placeholder="Gains actuels" />
        <input type="text" id="result" value={currentSum} readOnly />
        <button onClick={Add}>Add</button>
        <button onClick={Clear}>Clear</button>
      </form>
    </div>
  );
}

export default App;

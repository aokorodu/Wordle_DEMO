import { useState } from "react";
import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  const [max, setMax] = useState(6);
  const [start, setStart] = useState(false);

  const getWord = () => {
    let arr = [
      "Jazzy",
      "Quack",
      "Jumbo",
      "Lunch",
      "About",
      "Cards",
      "Point",
      "Pizza",
      "Quick",
      "Eagle",
      "Fable",
      "Facet",
      "Macho",
      "Nacho",
      "Oasis",
      "Pacer",
      "Saber",
      "Vague",
      "Xenon",
      "Yacht",
    ];
    const num = arr.length;
    const ind = Math.floor(Math.random() * num);

    return arr[ind].toUpperCase();
  };

  const updateAttempts = (e) => {
    const newVal = e.target.value;
    console.log("new value", newVal);
    setMax(e.target.value);
  };

  const beginGame = () => {
    setStart(true);
  };

  return (
    <>
      {start && <Wordle newWord={getWord()} attempts={max} />}
      {!start && (
        <div className="settingsHolder">
          <div className="attemptHolder">
            <div>
              <span>Max Attempts</span>
              <select
              className="settingsSelect"
                name="attempts"
                onChange={updateAttempts}
                defaultValue="6"
              >
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>

            <button onClick={beginGame}>BEGIN</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

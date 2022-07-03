import { useState } from "react";
import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  const [max, setMax] = useState(6);
  const [length, setLength] = useState(5);
  const [start, setStart] = useState(false);

  const getWord = () => {
    let arr_5 = [
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
    let arr_3 = [
      "ham",
      "jam",
      "cap",
      "red",
      "get",
      "goy",
      "gal",
      "guy",
      "gin",
      "gun",
      "bae",
      "dog",
      "map",
      "nil",
      "cob",
      "caw",
      "aim",
      "Mad",
      "Hog",
      "Pay",
    ];

    let arr_4 = [
      "Bake",
      "Word",
      "List",
      "Four",
      "Five",
      "Nine",
      "Good",
      "Best",
      "Cute",
      "Zero",
      "Huge",
      "Cool",
      "Tree",
      "Race",
      "Rice",
      "Keep",
      "Lace",
      "Beam",
      "Game",
      "Mars",
    ];

    let arr = arr_5
    if(length == 3) arr = arr_3;
    if(length == 4) arr = arr_4;
    const num = arr.length;
    const ind = Math.floor(Math.random() * num);

    return arr[ind].toUpperCase();
  };

  const updateAttempts = (e) => {
    const newVal = e.target.value;
    console.log("new value", newVal);
    setMax(e.target.value);
  };

  const updateLength = (e) => {
    const newVal = e.target.value;
    console.log("new value", newVal);
    setLength(e.target.value);
  };

  const beginGame = () => {
    setStart(true);
  };

  return (
    <>
      {start && <Wordle newWord={getWord()} attempts={max} />}
      {!start && (
        <div className="settingsHolder">
          <div>WORDL DEMO</div>
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
              </select>
            </div>



            <div>
              <span>Word Length</span>
              <select
                className="settingsSelect"
                name="length"
                onChange={updateLength}
                defaultValue="5"
              >
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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

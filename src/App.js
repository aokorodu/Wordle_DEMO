import { useState } from "react";
import styles from "./App.module.css";
import Wordle from "./components/Wordle";

function App() {
  const [max, setMax] = useState(6);
  const [length, setLength] = useState(5);
  const [start, setStart] = useState(false);

  const getWord = () => {
    let arr_5 = [
      "Abuse",
      "Adult",
      "Agent",
      "Anger",
      "Apple",
      "Award",
      "Basis",
      "Beach",
      "Birth",
      "Block",
      "Blood",
      "Board",
      "Brain",
      "Bread",
      "Break",
      "Brown",
      "Buyer",
      "Cause",
      "Chain",
      "Chair",
      "Chest",
      "Chief",
      "Child",
      "China",
      "Claim",
      "Class",
      "Clock",
      "Coach",
      "Coast",
      "Court",
      "Cover",
      "Cream",
      "Crime",
      "Cross",
      "Crowd",
      "Crown",
      "Cycle",
      "Dance",
      "Death",
      "Depth",
      "Doubt",
      "Draft",
      "Drama",
      "Dream",
      "Dress",
      "Drink",
      "Drive",
      "Earth",
      "Enemy",
      "Entry",
      "Error",
      "Event",
      "Faith",
      "Fault",
      "Field",
      "Fight",
      "Final",
      "Floor",
      "Focus",
      "Force",
      "Frame",
      "Frank",
      "Front",
      "Fruit",
      "Glass",
      "Grant",
      "Grass",
      "Green",
      "Group",
      "Guide",
      "Heart",
      "Henry",
      "Horse",
      "Hotel",
      "House",
      "Image",
      "Index",
      "Input",
      "Issue",
      "Japan",
      "Jones",
      "Judge",
      "Knife",
      "Laura",
      "Layer",
      "Level",
      "Lewis",
      "Light",
      "Limit",
      "Lunch",
      "Major",
      "March",
      "Match",
      "Metal",
      "Model",
      "Money",
      "Month",
      "Motor",
      "Mouth",
      "Music",
      "Night",
      "Noise",
      "North",
      "Novel",
      "Nurse",
      "Offer",
      "Order",
      "Other",
      "Owner",
      "Panel",
      "Paper",
      "Party",
      "Peace",
      "Peter",
      "Phase",
      "Phone",
      "Piece",
      "Pilot",
      "Pitch",
      "Place",
      "Plane",
      "Plant",
      "Plate",
      "Point",
      "Pound",
      "Power",
      "Press",
      "Price",
      "Pride",
      "Prize",
      "Proof",
      "Queen",
      "Radio",
      "Range",
      "Ratio",
      "Reply",
      "Right",
      "River",
      "Round",
      "Route",
      "Rugby",
      "Scale",
      "Scene",
      "Scope",
      "Score",
      "Sense",
      "Shape",
      "Share",
      "Sheep",
      "Sheet",
      "Shift",
      "Shirt",
      "Shock",
      "Sight",
      "Simon",
      "Skill",
      "Sleep",
      "Smile",
      "Smith",
      "Smoke",
      "Sound",
      "South",
      "Space",
      "Speed",
      "Spite",
      "Sport",
      "Squad",
      "Staff",
      "Stage",
      "Start",
      "State",
      "Steam",
      "Steel",
      "Stock",
      "Stone",
      "Store",
      "Study",
      "Stuff",
      "Style",
      "Sugar",
      "Table",
      "Taste",
      "Terry",
      "Theme",
      "Thing",
      "Title",
      "Total",
      "Touch",
      "Tower",
      "Track",
      "Trade",
      "Train",
      "Trend",
      "Trial",
      "Trust",
      "Truth",
      "Uncle",
      "Union",
      "Unity",
      "Value",
      "Video",
      "Visit",
      "Voice",
      "Waste",
      "Watch",
      "Water",
      "While",
      "White",
      "Whole",
      "Woman",
      "World",
      "Youth",
      "Alcon",
      "Aught",
      "Hella",
      "Ought",
      "Thame",
      "There",
      "Thine",
      "Thine",
      "Where",
      "Which",
      "Whose",
      "Whoso",
      "Yours",
      "Yours",
      "Admit",
      "Adopt",
      "Agree",
      "Allow",
      "Alter",
      "Apply",
      "Argue",
      "Arise",
      "Avoid",
      "Begin",
      "Blame",
      "Break",
      "Bring",
      "Build",
      "Burst",
      "Carry",
      "Catch",
      "Cause",
      "Check",
      "Claim",
      "Clean",
      "Clear",
      "Climb",
      "Close",
      "Count",
      "Cover",
      "Cross",
      "Dance",
      "Doubt",
      "Drink",
      "Drive",
      "Enjoy",
      "Enter",
      "Exist",
      "Fight",
      "Focus",
      "Force",
      "Guess",
      "Imply",
      "Issue",
      "Judge",
      "Laugh",
      "Learn",
      "Leave",
      "Limit",
      "Marry",
      "Match",
      "Occur",
      "Offer",
      "Order",
      "Phone",
      "Place",
      "Point",
      "Press",
      "Prove",
      "Raise",
      "Reach",
      "Refer",
      "Relax",
      "Serve",
      "Shall",
      "Share",
      "Shift",
      "Shoot",
      "Sleep",
      "Solve",
      "Sound",
      "Speak",
      "Spend",
      "Split",
      "Stand",
      "Start",
      "State",
      "Stick",
      "Study",
      "Teach",
      "Thank",
      "Think",
      "Throw",
      "Touch",
      "Train",
      "Treat",
      "Trust",
      "Visit",
      "Voice",
      "Waste",
      "Watch",
      "Worry",
      "Would",
      "Write",
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

    let arr = arr_5;
    if (length == 3) arr = arr_3;
    if (length == 4) arr = arr_4;
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
        <div className={styles.settingsHolder}>
          <div>WORDL DEMO</div>
          <div className={styles.attemptHolder}>
            <div>
              <span>Max Attempts</span>
              <select
                className={styles.settingsSelect}
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
                className={styles.settingsSelect}
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

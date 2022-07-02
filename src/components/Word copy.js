// import React from "react";
// import "./Word.css";
// import Card from "./Card";
// import { useState } from "react";

// function Word({ answer, guess }) {
//   const [solution, setSolution] = useState(answer.split(""));
//   const [letters, setLetters] = useState(guess.split(""));

//   return (
//     <>
//       <div className="cardRow">
//         {solution.map((letter, index)=>{
//             const guessLetter = letters[index] == undefined ? "" : letters[index];
//             console.log("letters: ", letters)
//             return(
//                 <Card key={index} answer={letter} guess={letters[index]} isflipped={false} />
//             )
//         })}
//       </div>
//     </>
//   );
// }

// export default Word;

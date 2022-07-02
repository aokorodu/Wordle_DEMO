// import React, { useState, useEffect } from "react";
// import Word from "./Word";
// import "./Wordle.css";

// function Wordle({ newWord }) {
//   const [currentWord, setCurrentWord] = useState(newWord);
//   const [currentGuess, setCurrentGuess] = useState("");
//   const max = 5;

//   const keyDownHandler = (event) => {
//     if (isALetter(event)) {
//       addLetterToGuess(getLetter(event));
//       return;
//     } else {
//         if(event.keyCode == 8){
//             removeLetterFromGuess();
//         }
//     }
//   };

// // useEffect(()=>{
    
// //     document.addEventListener("keydown", keyDownHandler, true);
// // }, [setCurrentGuess])

//   const isALetter = (event) => {
//     const keyCode = event.keyCode;
//     console.log(keyCode);
//     if (keyCode < 65 || keyCode > 99) {
//       return false;
//     }
//     return true;
//   };

//   const getLetter = (event) => {
//     return event.code.slice(-1);
//   };

//   const addLetterToGuess = (newLetter) => {
//     const newString = `${currentGuess}${newLetter}`;
    
//     console.log('current guess: ', currentGuess);
//     console.log('newString: ', newString)
//     setCurrentGuess(newString);
//     setCurrentWord(currentWord);
//   };

//   const removeLetterFromGuess = ()=>{
//     const newString = currentGuess.substring(0, currentGuess.length-1);
//     console.log('new string: ', newString)
//     setCurrentGuess(newString);
//   }

//   return (
//     <div tabIndex="0" onKeyDown={(e) => keyDownHandler(e)}>
//         <div>{currentGuess}</div>
//       <Word answer={currentWord} guess={currentGuess} />
//     </div>
//   );
// }

// export default Wordle;

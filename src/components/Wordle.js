import React, { useState, useRef } from "react";
import Word from "./Word";
import "./Wordle.css";

function Wordle({ newWord, attempts }) {
  const [currentWord, setCurrentWord] = useState(newWord.split(""));
  let currentGuess = [];
  const maxAttempts = attempts;
  const wordLength = 5;

  const WRONG = 0;
  const WRONG_PLACE = 1;
  const RIGHT = 2;

  const wordRefs = useRef([]);
  wordRefs.current = [];
  let wordIndex = 0;

  const addToRefs = (el) => {
    if (el && !wordRefs.current.includes(el)) {
      console.log("adding to refs");
      wordRefs.current.push(el);
    }

    console.log('total refs: ', wordRefs.current.length)
  };

  const keyDownHandler = (event) => {
    if (isALetter(event)) {
      addLetterToGuess(getLetter(event));
      typeLetters();
      if (currentGuess.length === wordLength) {
        checkGuess();
      }
      return;
    } else {
      if (event.keyCode === 8) {
        removeLetterFromGuess();
        typeLetters();
      }
    }
  };

  const typeLetters = () => {
    if (wordRefs.current[wordIndex] == undefined) return;

    console.log("length: ", wordRefs.current.length);
    console.log("wordle typeLetters");
    const word = wordRefs.current[wordIndex];
    word.typeLetters(currentGuess);
  };

  const checkGuess = () => {
    let guessArray = [];
    for (let i = 0; i < wordLength; i++) {
      let res = WRONG;
      const answerLetter = currentWord[i];
      const guessLetter = currentGuess[i];

      if (answerLetter === guessLetter) {
        res = RIGHT;
      } else if (currentWord.indexOf(guessLetter) > -1) {
        res = WRONG_PLACE;
      }
      guessArray[i] = res;
    }

    const word = wordRefs.current[wordIndex];
    if(word != undefined) word.showResults(guessArray);

    nextGuess();
  };

  const nextGuess = ()=>{
    currentGuess = [];
    wordIndex++;
  }

  const isALetter = (event) => {
    const keyCode = event.keyCode;
    console.log(keyCode);
    if (keyCode < 65 || keyCode > 99) {
      return false;
    }
    if(keyCode === 91) return false;
    return true;
  };

  const getLetter = (event) => {
    return event.code.slice(-1);
  };

  const addLetterToGuess = (newLetter) => {
    currentGuess.push(newLetter);
    console.log("current guess: ", currentGuess.toLocaleString());
  };

  const removeLetterFromGuess = () => {
    currentGuess.pop();
  };

  const getWordComponents = () =>{
    const arr = [];
    for(let i = 0; i < maxAttempts; i++){
      arr.push(<Word key={i} index={i} ref={addToRefs} length={wordLength} />)
    }

    return arr;
  }

  window.addEventListener("keydown", keyDownHandler);

  return (
    <>
      <div className="container">
       {getWordComponents()}
      </div>
    </>
    // <div>
    //   <div>{currentGuess}</div>
    //   <Word answer={currentWord} guess={currentGuess} />
    // </div>
  );
}

export default Wordle;

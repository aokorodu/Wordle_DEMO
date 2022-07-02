import React, { useState, useRef } from "react";
import Word from "./Word";
import "./Wordle.css";

function Wordle({ newWord }) {
  const [currentWord, setCurrentWord] = useState(newWord.split(""));
  let currentGuess = [];
  const maxAttempts = 5;
  const wordLength = 5;

  const WRONG = 0;
  const WRONG_PLACE = 1;
  const RIGHT = 2;

  const wordRefs = useRef([]);
  wordRefs.current = [];
  const wordIndex = 0;

  const addToRefs = (el) => {
    if (el && !wordRefs.current.includes(el)) {
      console.log("adding to refs");
      wordRefs.current.push(el);
    }
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

    console.log("check guess: ", guessArray.toString());

    currentGuess = [];
  };

  const isALetter = (event) => {
    const keyCode = event.keyCode;
    console.log(keyCode);
    if (keyCode < 65 || keyCode > 99) {
      return false;
    }
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

  window.addEventListener("keydown", keyDownHandler);

  return (
    <>
      <div className="container">
        <Word ref={addToRefs} length={wordLength} />
      </div>
    </>
    // <div>
    //   <div>{currentGuess}</div>
    //   <Word answer={currentWord} guess={currentGuess} />
    // </div>
  );
}

export default Wordle;

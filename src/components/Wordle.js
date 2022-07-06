import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import Word from "./Word";
import Bumper from "./Bumper";
import Winner from "./Winner";
import Keyboard from "./Keyboard";
import "./Wordle.css";

function Wordle({ newWord, attempts }) {
  console.log("New word: ", newWord, " -------------------");
  const currentWord = newWord.split("");
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  let currentGuess = [];
  const maxAttempts = attempts;
  const wordLength = newWord.length;

  const WRONG = 0;
  const WRONG_PLACE = 1;
  const RIGHT = 2;

  const wordRefs = useRef([]);
  wordRefs.current = [];
  let wordIndex = 0;

  const keyboard = useRef();

  const addToRefs = (el) => {
    if (el && !wordRefs.current.includes(el)) {
      wordRefs.current.push(el);
    }
  };

  const keyDownHandler = (event) => {
    guessHandler(getLetter(event));
  };

  const keyboardHandler = (key) => {
    guessHandler(key);
  };

  const guessHandler = (key) => {
    console.log('Key: ', key)
    if (isALetter(key) && currentGuess.length < wordLength) {
      addLetterToGuess(key);
      typeLetters();
      
    }
    if (key === "BACKSPACE" || key === "BACK")  {
      removeLetterFromGuess();
      typeLetters();
      return;
    }

    if(key === "ENTER"){
      if (currentGuess.length === wordLength) {
        checkGuess();
      }
      return;
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
    if (word != undefined) word.showResults(guessArray);
    if (isGuessCorrect(guessArray)) {
      console.log("winner!!");
      setTimeout(setWinner, 1500, true);
    } else {
      if (wordIndex == maxAttempts - 1) {
        setTimeout(setLoser, 1500, true);
        return;
      }

      updateKeyboard(guessArray);
      nextGuess();
    }
  };

  const updateKeyboard = (guessArray) => {
    currentGuess.forEach((currentLetter, index) => {
      keyboard.current.showKeyStatus(currentLetter, guessArray[index]);
    });
  };

  const isGuessCorrect = (guessArray) => {
    if (
      guessArray.indexOf(WRONG) == -1 &&
      guessArray.indexOf(WRONG_PLACE) == -1
    ) {
      return true;
    }

    return false;
  };

  const nextGuess = () => {
    currentGuess = [];
    wordIndex++;
  };

  const isALetter = (key) => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(alpha.indexOf(key) == -1) return false
    return true;
  };

  const getLetter = (event) => {
    console.log(event)
    return event.key.toUpperCase();
  };

  const addLetterToGuess = (newLetter) => {
    currentGuess.push(newLetter);
    console.log("current guess: ", currentGuess.toLocaleString());
  };

  const removeLetterFromGuess = () => {
    currentGuess.pop();
  };

  const getWordComponents = () => {
    const arr = [];
    for (let i = 0; i < maxAttempts; i++) {
      arr.push(<Word key={i} index={i} ref={addToRefs} length={wordLength} />);
    }

    return arr;
  };

  window.addEventListener("keydown", keyDownHandler);

  return (
    <>
      <div className="container">
        <div className="cardContainer">
          <div>{getWordComponents()}</div>
        </div>
        <Keyboard key={0} ref={keyboard} onKeyPress={keyboardHandler} />
      </div>
      {loser && <Bumper answer={currentWord} />}
      {winner && <Winner />}
    </>
    // <div>
    //   <div>{currentGuess}</div>
    //   <Word answer={currentWord} guess={currentGuess} />
    // </div>
  );
}

export default Wordle;

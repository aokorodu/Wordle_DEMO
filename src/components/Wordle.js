import React, { useState, useRef } from "react";
import Word from "./Word";
import Bumper from "./Bumper";
import Winner from "./Winner";
import Keyboard from "./Keyboard";
import styles from "./Wordle.module.css";
import {isALetter, getLetter} from '../utils/helperFunctions'

function Wordle({ newWord, attempts, canvasFireworks, colorPalette }) {
  console.log('WORD: ', newWord, '-------------');
  console.log('canvasFireworks: ', canvasFireworks)
  console.log('wordle colorPalette: ', colorPalette)
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const cnvsFireworks = canvasFireworks;
  const clrPalette = colorPalette
  const currentWord = newWord.split("");
  let currentGuess = [];
  const maxAttempts = attempts;
  const wordLength = newWord.length;

  const WRONG = 0;
  const WRONG_PLACE = 1;
  const RIGHT = 2;

  const wordRefs = useRef([]);
  let wordIndex = 0;

  const keyboard = useRef();

  const addToWordRefs = (el) => {
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

    const word = wordRefs.current[wordIndex];
    word.typeLetters(currentGuess);
  };

  const checkGuess = () => {
    // FIRST, check which letters are right/wrong/wrong place
    let guessArray = [];
    for (let i = 0; i < wordLength; i++) {
      let res = WRONG;
      const answerLetter = currentWord[i];
      const guessLetter = currentGuess[i];

      // if answer == guess, the result is RIGHT
      // else if guess is somewhere in the current word, answer is WRONG_PLACE
      if (answerLetter === guessLetter){
        res = RIGHT;
      } else if (currentWord.indexOf(guessLetter) > -1) res = WRONG_PLACE;
      
      
      
      guessArray[i] = res;
    }

    // NEXT find current word and show results
    const word = wordRefs.current[wordIndex];
    if (word != undefined) word.showResults(guessArray);

    // if guess is correct, setWinner(true). Otherwise setLoser(true)
    if (isGuessCorrect(guessArray)) {
      console.log("winner!!");
      setTimeout(setWinner, 1500, true);
    } else {
      if (wordIndex == maxAttempts - 1) {
        setTimeout(setLoser, 1500, true);
        return;
      }

      //  update keyboard with the results (highlight right/wrong/wrongplace aswers)
      updateKeyboard(guessArray);
      // move on to the next guess
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

  const addLetterToGuess = (newLetter) => {
    currentGuess.push(newLetter);
  };

  const removeLetterFromGuess = () => {
    currentGuess.pop();
  };

  const getWordComponents = () => {
    const arr = [];
    for (let i = 0; i < maxAttempts; i++) {
      arr.push(<Word key={i} index={i} ref={addToWordRefs} length={wordLength} />);
    }

    return arr;
  };

  

  window.addEventListener("keydown", keyDownHandler);

  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.cardContainer}>
        
          <div>{getWordComponents()}</div>
        </div>
        <Keyboard key={0} ref={keyboard} onKeyPress={keyboardHandler} />
      </div>
      {loser && <Bumper answer={currentWord} />}
      {winner && <Winner canvasFireworks={cnvsFireworks} colorPalette={clrPalette}/>}
      
    </>
  );
}

export default Wordle;

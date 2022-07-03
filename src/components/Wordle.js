import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import Word from "./Word";
import Bumper from "./Bumper";
import Winner from "./Winner";
import "./Wordle.css";

function Wordle({ newWord, attempts }) {
  const [currentWord, setCurrentWord] = useState(newWord.split(""));
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
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

    console.log("total refs: ", wordRefs.current.length);
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
    if (word != undefined) word.showResults(guessArray);
    if (isGuessCorrect(guessArray)) {
      console.log("winner!!");
      setTimeout(setWinner, 1500, true);
    } else {
      if (wordIndex == maxAttempts - 1) {
        setTimeout(setLoser, 1500, true);
        return;
      }

      nextGuess();
    }
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

  const isALetter = (event) => {
    const keyCode = event.keyCode;
    console.log(keyCode);
    if (keyCode < 65 || keyCode > 99) {
      return false;
    }
    if (keyCode === 91) return false;
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
        <div>
          <svg width="500" height="200" viewBox="0 0 390 140">
            <g id="keyboard">
              <g class="key" id="Q">
                <rect
                  id="Rectangle 1"
                  x="27"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_2"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="36.1797" y="40.3182">
                    Q
                  </tspan>
                </text>
              </g>
              <g class="key" id="W">
                <rect
                  id="Rectangle 1_2"
                  x="61"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_3"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="67.4844" y="40.3182">
                    W
                  </tspan>
                </text>
              </g>
              <g class="key" id="A">
                <rect
                  id="Rectangle 1_3"
                  x="43"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_4"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="52.3281" y="75.3182">
                    A
                  </tspan>
                </text>
              </g>
              <g class="key" id="E">
                <rect
                  id="Rectangle 1_4"
                  x="95"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_5"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="105.062" y="40.3182">
                    E
                  </tspan>
                </text>
              </g>
              <g class="key" id="S">
                <rect
                  id="Rectangle 1_5"
                  x="77"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_6"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="87.2188" y="75.3182">
                    S
                  </tspan>
                </text>
              </g>
              <g class="key" id="Z">
                <rect
                  id="Rectangle 1_6"
                  x="77"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_7"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="87.0547" y="110.318">
                    Z
                  </tspan>
                </text>
              </g>
              <g class="key" id="R">
                <rect
                  id="Rectangle 1_7"
                  x="129"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_8"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="139.203" y="40.3182">
                    R
                  </tspan>
                </text>
              </g>
              <g class="key" id="D">
                <rect
                  id="Rectangle 1_8"
                  x="111"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_9"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="120.156" y="75.3182">
                    D
                  </tspan>
                </text>
              </g>
              <g class="key" id="X">
                <rect
                  id="Rectangle 1_9"
                  x="111"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_10"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="120.094" y="110.318">
                    X
                  </tspan>
                </text>
              </g>
              <g class="key" id="T">
                <rect
                  id="Rectangle 1_10"
                  x="163"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_11"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="173.086" y="40.3182">
                    T
                  </tspan>
                </text>
              </g>
              <g class="key" id="F">
                <rect
                  id="Rectangle 1_11"
                  x="145"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_12"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="155.32" y="75.3182">
                    F
                  </tspan>
                </text>
              </g>
              <g class="key" id="C">
                <rect
                  id="Rectangle 1_12"
                  x="145"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_13"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="154.414" y="110.318">
                    C
                  </tspan>
                </text>
              </g>
              <g class="key" id="Y">
                <rect
                  id="Rectangle 1_13"
                  x="197"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_14"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="206.047" y="40.3182">
                    Y
                  </tspan>
                </text>
              </g>
              <g class="key" id="G">
                <rect
                  id="Rectangle 1_14"
                  x="179"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_15"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="188.367" y="75.3182">
                    G
                  </tspan>
                </text>
              </g>
              <g class="key" id="V">
                <rect
                  id="Rectangle 1_15"
                  x="179"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_16"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="188.328" y="110.318">
                    V
                  </tspan>
                </text>
              </g>
              <g class="key" id="U">
                <rect
                  id="Rectangle 1_16"
                  x="231"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_17"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="240.195" y="40.3182">
                    U
                  </tspan>
                </text>
              </g>
              <g class="key" id="H">
                <rect
                  id="Rectangle 1_17"
                  x="213"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_18"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="222.016" y="75.3182">
                    H
                  </tspan>
                </text>
              </g>
              <g class="key" id="B">
                <rect
                  id="Rectangle 1_18"
                  x="213"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_19"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="223.188" y="110.318">
                    B
                  </tspan>
                </text>
              </g>
              <g class="key" id="I">
                <rect
                  id="Rectangle 1_19"
                  x="265"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_20"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="278.211" y="40.3182">
                    I
                  </tspan>
                </text>
              </g>
              <g class="key" id="J">
                <rect
                  id="Rectangle 1_20"
                  x="247"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_21"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="257.367" y="75.3182">
                    J
                  </tspan>
                </text>
              </g>
              <g class="key" id="N">
                <rect
                  id="Rectangle 1_21"
                  x="247"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_22"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="256.164" y="110.318">
                    N
                  </tspan>
                </text>
              </g>
              <g class="key" id="O">
                <rect
                  id="Rectangle 1_22"
                  x="299"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_23"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="308.188" y="40.3182">
                    O
                  </tspan>
                </text>
              </g>
              <g class="key" id="K">
                <rect
                  id="Rectangle 1_23"
                  x="281"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_24"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="290.383" y="75.3182">
                    K
                  </tspan>
                </text>
              </g>
              <g class="key" id="M">
                <rect
                  id="Rectangle 1_24"
                  x="281"
                  y="89"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_25"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="289.117" y="110.318">
                    M
                  </tspan>
                </text>
              </g>
              <g class="key" id="P">
                <rect
                  id="Rectangle 1_25"
                  x="333"
                  y="19"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_26"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="343.281" y="40.3182">
                    P
                  </tspan>
                </text>
              </g>
              <g class="key" id="L">
                <rect
                  id="Rectangle 1_26"
                  x="315"
                  y="54"
                  width="30"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_27"
                  fill="black"
                  
                  font-size="16"
                  font-weight="800"
                  letter-spacing="0em"
                >
                  <tspan x="325.445" y="75.3182">
                    L
                  </tspan>
                </text>
              </g>
              <g class="key" id="ENTER">
                <rect
                  id="Rectangle 1_27"
                  x="27"
                  y="89"
                  width="45"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_28"
                  fill="black"
                  
                  font-size="10"
                  font-weight="600"
                  letter-spacing="0em"
                >
                  <tspan x="33.167" y="107.636">
                    ENTER
                  </tspan>
                </text>
              </g>
              <g class="key" id="BACK">
                <rect
                  id="Rectangle 1_28"
                  x="318"
                  y="90"
                  width="45"
                  height="30"
                  rx="5"
                  fill="#D9D9D9"
                />
                <text
                  id="Q_29"
                  fill="black"
                  
                  font-size="10"
                  font-weight="600"
                  letter-spacing="0em"
                >
                  <tspan x="333.771" y="108.636">
                    &#60;=
                  </tspan>
                </text>
              </g>
            </g>
          </svg>
        </div>
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

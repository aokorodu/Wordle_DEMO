import React from "react";
import "./Card.css";

function FlipCard({ id, letter, delay }) {
  const i = id;
  const l = letter;
  const del = delay;

  const flip = () => {
    const str = `#flipcard_${i}`;
    console.log('str: ', str);
    
    setTimeout(() => {
      const card = document.querySelector(str);
      card.classList.add("flip");
    }, del);
  };

  flip();

  return (
    <>
      <div id={`flipcard_${i}`} className={"card"}>
        <div className="face front"></div>
        <div className="face default">
          {l}
        </div>
      </div>
    </>
  );
}

export default FlipCard;

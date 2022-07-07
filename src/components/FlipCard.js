import React from "react";
import CardCSS from './Card.module.css';
import cx from 'classnames'

function FlipCard({ id, letter, delay }) {
  const i = id;
  const l = letter;
  const del = delay;

  const flip = () => {
    const str = `#flipcard_${i}`;
    console.log('str: ', str);
    
    setTimeout(() => {
      const card = document.querySelector(str);
      card.classList.add(CardCSS.flip);
    }, del);
  };

  flip();

  return (
    <>
      <div id={`flipcard_${i}`} className={CardCSS.card}>
        <div className={cx(CardCSS.face, CardCSS.front)}></div>
        <div className={cx(CardCSS.face, CardCSS.default)}>
          {l}
        </div>
      </div>
    </>
  );
}

export default FlipCard;

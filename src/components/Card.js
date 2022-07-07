import React from "react";
import CardCSS from './Card.module.css';
import cx from 'classnames'

class Card extends React.Component {
  constructor({id}) {
    super();
    this.id = id;
    this.frontFace = undefined;
    this.backFace = undefined;
  }

  typeLetter(letter, blank=false){
    if(this.frontFace == undefined){
      this.frontFace = document.querySelector(`#front_${this.id}`);
      this.backFace = document.querySelector(`#back_${this.id}`);
    } 
    if(!blank) this.frontFace.textContent = letter;
    this.backFace.textContent = letter;
    console.log("letter:", letter)
  }

  flip(res, delay=0){
    
    this.colorCode(res);
    const card = document.querySelector(`#card_${this.id}`);
    setTimeout(()=>{card.classList.add(CardCSS.flip)}, delay)
    
  }

  colorCode(res){
    console.log('result: ', res);
    if(res === 0) this.backFace.classList.add(CardCSS.wrong);
    if(res === 1) this.backFace.classList.add(CardCSS.wrongPlace);
    if(res === 2) this.backFace.classList.add(CardCSS.right);
  }

  render() {
    return (
      <>
        <div id={`card_${this.id}`} className={CardCSS.card}>
          <div id={`front_${this.id}`} className={cx(CardCSS.face, CardCSS.front)}></div>
          <div id={`back_${this.id}`} className={cx(CardCSS.face, CardCSS.back)}></div>
        </div>
      </>
    );
  }
}


export default Card;

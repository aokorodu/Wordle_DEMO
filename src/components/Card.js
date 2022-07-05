import React from "react";
import './Card.css'

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
    setTimeout(()=>{card.classList.add("flip")}, delay)
    
  }

  colorCode(res){
    console.log('result: ', res);
    if(res === 0) this.backFace.classList.add("wrong");
    if(res === 1) this.backFace.classList.add("wrongPlace");
    if(res === 2) this.backFace.classList.add("right");
  }

  render() {
    return (
      <>
        <div id={`card_${this.id}`} className={"card"}>
          <div id={`front_${this.id}`} className="face front"></div>
          <div id={`back_${this.id}`} className="face back"></div>
        </div>
      </>
    );
  }
}


export default Card;

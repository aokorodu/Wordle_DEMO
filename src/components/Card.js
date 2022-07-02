import React from "react";
import './Card.css'

class Card extends React.Component {
  constructor({id}) {
    super();
    this.id = id;
    this.frontFace = undefined;
    this.backFace = undefined;
  }

  typeLetter(letter){
    if(this.frontFace == undefined){
      this.frontFace = document.querySelector(`#front_${this.id}`);
      this.backFace = document.querySelector(`#back_${this.id}`);
    } 
    this.frontFace.textContent = letter;
    this.backFace.textContent = letter;
    console.log("letter:", letter)
  }

  flip(){
    const card = document.querySelector(`#card_${this.id}`);
    card.classList.add("flip")
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

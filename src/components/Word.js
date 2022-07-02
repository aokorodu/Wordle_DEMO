import React from "react";
import "./Word.css";
import Card from "./Card";

class Word extends React.Component {
  constructor({ index, length }) {
    super();
    this.index = index;
    this.length = length;
    this.cardRefs = [];
    console.log('word index: ', this.index)
  }

  getCards = () => {
    console.log("this.length", this.length);
    let cards = [];
    for (let i = 0; i < this.length; i++) {
      console.log(i);
      const ref = React.createRef();
      this.cardRefs.push(ref);
      cards.push(<Card key={i} id={`${this.index}_${i}`} ref={this.cardRefs[i]} />);
    }
    return cards;
  };

  typeLetters = (letters) => {
    console.log("Word type letters: ", letters);
    for (let i = 0; i < this.length; i++) {
      this.cardRefs[i].current.typeLetter(letters[i]);
    }
  };

  showResults = (res) => {
    for (let i = 0; i < this.length; i++) {
      this.cardRefs[i].current.flip(res[i], i*150);
    }
  };

  render() {
    console.log("rendering word");
    return (
      <>
        <div className="cardRow">{this.getCards()}</div>
      </>
    );
  }
}

export default Word;

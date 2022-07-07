import React from "react";
import styles from "./Word.module.css";
import Card from "./Card";

class Word extends React.Component {
  constructor({ index, length }) {
    super();
    this.index = index;
    this.length = length;
    this.cardRefs = [];
  }

  getCards = () => {
    let cards = [];
    for (let i = 0; i < this.length; i++) {
      const ref = React.createRef();
      this.cardRefs.push(ref);
      cards.push(<Card key={i} id={`${this.index}_${i}`} ref={this.cardRefs[i]} />);
    }
    return cards;
  };

  typeLetters = (letters) => {
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
    return (
      <>
        <div className={styles.cardRow}>{this.getCards()}</div>
      </>
    );
  }
}

export default Word;

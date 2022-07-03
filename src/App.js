import './App.css';
import Wordle from './components/Wordle';

function App() {
  const getWord = ()=>{
    let arr = ["Jazzy", "Quack", "Jumbo", "Lunch", "About", "Cards", "Point", "Pizza", "Quick", "Eagle", "Fable", "Facet", "Macho", "Nacho", "Oasis", "Pacer", "Saber", "Vague", "Xenon", "Yacht"];
    const num = arr.length;
    const ind = Math.floor(Math.random()*num)

    return arr[ind];
  }
  return (
    <Wordle newWord={getWord()} attempts={5}/>
  );
}

export default App;

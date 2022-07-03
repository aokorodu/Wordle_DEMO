import './App.css';
import Wordle from './components/Wordle';

function App() {
  return (
    <Wordle newWord={"LUNCH"} attempts={5}/>
  );
}

export default App;

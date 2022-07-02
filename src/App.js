import logo from './logo.svg';
import './App.css';
import Wordle from './components/Wordle';

function App() {
  return (
    <Wordle newWord={"BOATS"} attempts={5}/>
  );
}

export default App;

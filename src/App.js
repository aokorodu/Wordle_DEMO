import logo from './logo.svg';
import './App.css';
import Wordle from './components/Wordle';

function App() {
  return (
    <Wordle newWord={"BOATS"} attempts={7}/>
  );
}

export default App;

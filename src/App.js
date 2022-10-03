import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function ButtonPlus() {
  return (
    <div className="App">
      
    </div>
  );
}

export default function App() {
  const [counter, setCounter] = useState(1);
  const [input, setInput] = useState("hi");
  const cong = () => {
    setCounter(counter +1)
  }
  console.log(cong)
  const tru = () => {
    setCounter(counter -1)
  }
  const handleChange = (event) => {
      console.log("Changing", event.target.value)
      setInput(event.target.value)
  }
  return(
    <div>
      <input value={input} onChange={handleChange}/>
      <h2>Counter {counter}</h2>
      <button onClick={cong}>+</button>
      <button onClick={tru}>-</button>
    </div>
  )
    

};

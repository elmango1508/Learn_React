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
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
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
  const click = () => {    
    alert(input)
  }
  const fName = (event) => {
    setFname(event.target.value)
  }
  const lName = (event) => {
    setLname(event.target.value)
  }
  const submit = () => {
    setIsSubmit(true)
  }
  const showName = () => {
    if(isSubmit == true){
      return <p>My name is {fname} {lname}</p>
    }
    return<p>No name</p>
  }
  return(
    <div>
      <input value={input} onChange={handleChange}/> <button onClick={click}>Click</button>
      <br></br>
      FisrtName<input value={fname} onChange={fName}/>
      LastName<input value={lname} onChange={lName}/>
      <button onClick={submit}>Submit</button>
      <br></br>
      {showName()}
      <h2>Counter {counter}</h2>
      <button onClick={cong}>+</button>
      <button onClick={tru}>-</button>
    </div>
  )
    

};

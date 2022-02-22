import React,{useState} from 'react';
import './App.css';

function App() {

   const [name,setname] = useState("mani");
   const [flag,setflag] = useState(false);
   const [steps,setsteps] = useState(0);
  const changeName = () =>
  {
      console.log("name is changed");
      return setname("messi");
  }

  const AppearName = () =>
  {
      console.log("name is appeared");
      return setflag(!flag);
  }

  const Increment = () =>
  {
      return setsteps(steps + 1);
  }

  const Decrement = () =>
  { 
    setsteps((prevstate) => prevstate - 1);
    setsteps((prevstate) => prevstate - 1);
  }

  return (
    <div>
      <div>Hello,{name}</div>
      <button onClick={changeName}> Click Me</button>
      <div>Hello,{flag ? name:""}</div>
      <button onClick={AppearName}>Click Here</button>
      <br/>
      <br/>
      <button onClick={Increment}>Increment</button>
      <div>Value,{steps}</div>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}



export default App;

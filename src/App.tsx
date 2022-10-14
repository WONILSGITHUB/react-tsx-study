import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

const App: React.FC = () => {
    const onClick = function (name: string) {
        console.log(`${name}`)
    };
    const onSubmit = function (form: {name: string; description: string}) {
        console.log(form)
    }
  return (
    <div className="App">
      <Greetings name="Hello" onClick={onClick}/>
      <Counter/>
      <MyForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;

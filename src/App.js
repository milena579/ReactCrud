import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  const [counter, setCounter] = useState(0)

  function incrementar(){
    setCounter(counter++)
  }

  return (
    <div >
      <Header batata = "Mile"></Header>
      <h1>Olá</h1>

      <div>
        <h1>Contador:{counter}</h1>

        <button onClick={incrementar}>Incrementar</button>
      </div>

      <Main></Main>
    </div>
  );
}

export default App;

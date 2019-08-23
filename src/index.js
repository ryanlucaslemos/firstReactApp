import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //ENTRADA, RODANDO, FIM
  const [estado, setState] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);

  const [min, setMin] = useState(0);

  const [max, setMax] = useState(300);

  // palpites que a maquina deu
  const [numPalpites, setNumPalpites] = useState(1);

  const iniciarJogo = () => {
    setState("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setState("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          A máquina acertou o número {palpite} com {numPalpites} palpites
        </p>
        <button onClick={iniciarJogo}>Iniciar jogo</button>
      </div>
    );
  }
  /*
  <p>
        Min {min} / max {max}
      </p>
  
  */

  return (
    <div className="App">
      <p>o Seu número é {palpite}</p>

      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

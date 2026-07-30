import "./App.css";

import GoldenGate from "./assets/golden-gate.jpg";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img01.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <img src={GoldenGate} alt="Golden Gate" />
    </div>
  );
}

export default App;

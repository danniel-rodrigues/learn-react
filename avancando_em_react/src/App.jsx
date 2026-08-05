import "./App.css";

import GoldenGate from "./assets/golden-gate.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  const name = "Alessandra";

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "Branco", km: 3434, newCar: false },
    { id: 3, brand: "Renault", color: "Azul", km: 1234, newCar: false },
  ];

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img01.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <img src={GoldenGate} alt="Golden Gate" />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name={name} />
      {/* Destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
    </div>
  );
}

export default App;

const Events = () => {
  const isBadPractice = true;

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Clique aqui também!
        </button>

        <button
          // Má prática, não faça isso em casa!
          onClick={() => {
            if (isBadPractice) {
              console.log("Isso é uma má prática =(");
            }
          }}
        >
          Clica aqui, por favor
        </button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;

const TemplateExpressions = () => {
  const name = "Daniel";
  const data = {
    age: 28,
    job: "Programador",
  };
  return (
    <div>
      <h1>Olá, {name}! Tudo bem com você?</h1>
      <p>
        Você tem {data.age} anos e atua como {data.job}
      </p>
    </div>
  );
};

export default TemplateExpressions;

import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Maria", "José"]);

  const [users] = useState([
    { id: 1, name: "Daniel", age: 28 },
    { id: 1234, name: "Alessandra", age: 23 },
    { id: 4861, name: "Emilly", age: 17 },
    { id: 3011, name: "Isaías", age: 19 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;

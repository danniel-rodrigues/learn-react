import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Maria", "José"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Daniel", age: 28 },
    { id: 2, name: "Alessandra", age: 23 },
    { id: 3, name: "Emilly", age: 17 },
    { id: 4, name: "Isaías", age: 19 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

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
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;

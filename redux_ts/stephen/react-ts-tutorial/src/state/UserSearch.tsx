import React, { useState } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 30 },
  { name: "Bert", age: 40 },
  { name: "Bob", age: 10 },
  { name: "Terry", age: 110 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  function handleClick() {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  }

  return (
    <div>
      UserSearch
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>Find User</button>
      <div>{user?.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;

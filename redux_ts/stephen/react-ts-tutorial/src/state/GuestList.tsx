import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    setGuests([...guests, name]);
    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>
      <div>
        <form action="">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            Add Guest
          </button>
        </form>
      </div>
      <div>
        List of Guests
        <ul>
          {guests.map((guest) => {
            return <li key={guest}>{guest}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default GuestList;

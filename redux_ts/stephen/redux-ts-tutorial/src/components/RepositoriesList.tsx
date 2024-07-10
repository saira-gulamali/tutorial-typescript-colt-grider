import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { error, loading, data } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchRepositories(term);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      <hr />
      {error && <div>Something went wrong: {error}</div>}
      {loading && <div>Loading...</div>}
      <div>
        {data &&
          data.map((item) => {
            return <div key={item}>{item}</div>;
          })}
      </div>
    </div>
  );
};

export default RepositoriesList;

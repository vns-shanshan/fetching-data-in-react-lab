import { useState } from "react";

const StarshipSearch = ({ handleSearch }) => {
  const [starshipInput, setStarshipInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    handleSearch(starshipInput);

    setStarshipInput("");
  }

  return (
    <section>
      <h2>Search</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Search Term: </label>
        <input
          type="text"
          id="starship"
          name="starship"
          value={starshipInput}
          onChange={(e) => setStarshipInput(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;

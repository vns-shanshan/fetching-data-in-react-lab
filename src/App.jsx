import { useState } from "react";
import { useEffect } from "react";

import * as starshipSevice from "./services/starshipService";

import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";

const App = () => {
  // name
  // class
  // manufacturer
  // model
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("useEffect works");

    async function fetchDefaultData() {
      const data = await starshipSevice.show();
      console.log(data);

      setStarships(data);
      setFilteredStarships(data);

      setIsLoading(false);
    }

    fetchDefaultData();
  }, []);

  function handleSearch(starshipInput) {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(starshipInput.toLowerCase())
    );

    setFilteredStarships(filtered);
  }

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch handleSearch={handleSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={filteredStarships} />
      )}
    </main>
  );
};

export default App;

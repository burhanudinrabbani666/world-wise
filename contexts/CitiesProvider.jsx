import { useState, useEffect } from "react";
import { CitiesContexts } from "./cityContext";

const BASE_URL = `http://localhost:4000`;

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(cities);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert(`There was an error loading data.... ${error}`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <CitiesContexts.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContexts.Provider>
  );
}

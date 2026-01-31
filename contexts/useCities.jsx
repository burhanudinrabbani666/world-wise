import { useContext } from "react";
import { CitiesContexts } from "./cityContext";

export function useCities() {
  const context = useContext(CitiesContexts);

  if (context === undefined)
    throw new Error("citiesContext was use utside the citiesProvider");

  return context;
}

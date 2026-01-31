# CREATING CITIESCONTEXT

for small aplication create using context API can make our aplication alot cleaner and not make any performance issues

`citiesContext.jsx`

```jsx
import { createContext, useState, useEffect } from "react";

const BASE_URL = `http://localhost:4000`;

const CitiesContexts = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

export { CitiesProvider };
```

`app.jsx`

```jsx
function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/* Redirect to app/cities */}
            <Route index element={<Navigate replace to="cities" />} />

            <Route path="cities/:id" element={<City />} />
            <Route path="cities" element={<CityList />} />
            <Route path="country" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>

          {/* Executed when nothing oath matched */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
```

[Next: Consuming citiesContext](./07-consuming-citiesContext.md)

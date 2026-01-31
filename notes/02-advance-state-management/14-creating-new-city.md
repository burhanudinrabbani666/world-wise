# CREATING NEW CITY

creating custom hooks for get URL

```jsx
const [lat, lng] = useUrlPosition();
```

fetxh the lattitude and longitude for displaying in the form

```jsx
useEffect(() => {
  if (!lat && !lng) return;

  async function fetchCity() {
    try {
      setIsLoadingGeoCoding(true);
      setGeoCodingError("");

      const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
      const data = await res.json();

      if (!data.countryCode)
        throw new Error("doesn't seem to be a city. Click somewhere else 😃");

      setCityName(data.city || data.locality || "");
      setCountry(data.countryName);
      setEmoji(convertToEmoji(data.countryCode));
    } catch (error) {
      setGeoCodingError(error.message);
    } finally {
      setIsLoadingGeoCoding(false);
    }
  }

  fetchCity();
}, [lat, lng]);
```

installing react-datepicker

```dash
npm install react-datepicker
```

submiting the form function

```jsx
async function handleSubmit(event) {
  event.preventDefault();
  if (!cityName || !date) return;

  const newCity = {
    cityName,
    country,
    emoji,
    date,
    notes,
    position: { lat, lng },
  };

  await createCity(newCity); // post and await
  navigate("/app");
}
```

post to server

```jsx
async function createCity(newCity) {
  try {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/cities/`, {
      method: "post",
      body: JSON.stringify(newCity),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    setCities((cities) => [...cities, data]);
  } catch (error) {
    alert(`There was an error loading data.... ${error}`);
  } finally {
    setIsLoading(false);
  }
}
```

[Next: Deleting city]()

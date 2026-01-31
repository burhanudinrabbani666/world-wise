# FETCHING CITY DATA IN THE FORM

```jsx
const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
const [emoji, setEmoji] = useState("");
const [geoCodingError, setGeoCodingError] = useState("");

useEffect(() => {
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

if (isLoadingGeoCoding) return <Spinner />;

if (geoCodingError) return <Message message={geoCodingError}></Message>;
```

[Next: Creating new city](./14-creating-new-city.md)

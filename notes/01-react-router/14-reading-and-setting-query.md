# READING AND SETTING QUERY

get Params with `useParams`

example:

> http://localhost:5173/app/cities/73930385?lat=38.727881642324164&lng=-9.140900099907554

```jsx
function Map() {
  const [search, setSearch] = useSearchParams();
  // setSearch make the params can use globaly

  const lat = search.get("lat");
  const lng = search.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      position: {lat} {lng}
      <button
        onClick={() => {
          setSearch({ lat: 23, lng: 20 });
        }}
      >
        Change pos
      </button>
    </div>
  );
}
export default Map;
```

[Next: Programmatic navigation](./15-programmatic-navigation.md)

# DISPLAYING CITY MARKER

```jsx
return (
  <div
    className={styles.mapContainer}
    onClick={() => {
      navigate("form");
    }}
  >
    <MapContainer
      center={mapPosition}
      zoom={13}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {cities.map((city) => (
        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
          <Popup>
            <span>{city.emoji}</span> <span>{city.cityName}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);
```

[Next: Interacting with map](./11-interacting-with-map.md)

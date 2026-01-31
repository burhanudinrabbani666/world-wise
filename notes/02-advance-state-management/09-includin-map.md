# INCLUDING MAP

use open source map like leaflet for displaying map:

- [react leaflet](https://react-leaflet.js.org/docs/start-setup/)
- [leaflet](https://leafletjs.com/examples/quick-start/)

```bash
npm install react-leaflet@next leaflet
```

consuming leaflet (dont forget to set Height for 100%)

```jsx
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";

function Map() {
  const navigate = useNavigate();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [search, setSearch] = useSearchParams();

  const lat = search.get("lat");
  const lng = search.get("lng");

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
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
```

[Next: Displaying city marker](./10-displaying-city-marker.md)

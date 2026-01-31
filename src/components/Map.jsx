import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";

import { useGeolocation } from "../hooks/useGeolocation";
import { useCities } from "../../contexts/useCities";
import Button from "./Button";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const [search] = useSearchParams();

  const {
    isLoading: isLoadingPosition,
    position: geoLocataionPosition,
    getPosition,
  } = useGeolocation();

  const mapLat = search.get("lat");
  const mapLng = search.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng],
  );

  useEffect(() => {
    if (geoLocataionPosition)
      setMapPosition([geoLocataionPosition.lat, geoLocataionPosition.lng]);
  }, [geoLocataionPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoLocataionPosition && (
        <Button type="position" onClick={getPosition}>
          {isLoadingPosition ? "Loading..." : "Use your position"}
        </Button>
      )}
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
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetecClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetecClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (event) => {
      console.log(event.latlng);
      navigate(`form?lat=${event.latlng.lat}&lng=${event.latlng.lng}`);
    },
  });
}

export default Map;

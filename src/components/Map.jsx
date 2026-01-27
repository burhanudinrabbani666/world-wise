import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
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

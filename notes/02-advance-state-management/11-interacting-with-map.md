# INTERACTING WITH MAP

this still have error because React rule

```jsx
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
```

[Next: Setting map resolution](./12-setting-map-resolution.md)

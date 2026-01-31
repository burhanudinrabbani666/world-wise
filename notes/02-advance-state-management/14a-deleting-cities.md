# DELETING CITIES

creating function in provider component for deleting item

```jsx
async function deleteCity(id) {
  try {
    setIsLoading(true);
    await fetch(`${BASE_URL}/cities/${id}`, { method: "delete" });

    setCities((cities) => cities.filter((city) => city.id !== id));
  } catch (error) {
    alert(`There was an error deleting city. ${error}`);
  } finally {
    setIsLoading(false);
  }
}
```

and attach to city item delete button

```jsx
function handleDelete(event) {
  event.preventDefault();

  deleteCity(id);
}

// JSX COMPONENT
<button className={styles.deleteBtn} onClick={handleDelete}>
  &times;
</button>;
```

[Next: Advance state management system](./15-advance-state-management-system.md)

# DYNAMIC ROUTES WITH URL PARAMETERS

1. Creaate New Route

```jsx
<Route path="cities/:id" element={<City />} />
```

2. Link to component

```jsx
return (
  <li>
    <Link className={styles.cityItem} to={`${id}`}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </Link>
  </li>
);
```

3. and get the params

with `useParams`

```jsx
function City() {
  const { id } = useParams();
  return <h1>City {id}</h1>;
}
```

[Next: Reading and setting query](./14-reading-and-setting-query.md)

# PROGRAMMATIC NAVIGATION

to easy navigate. using `useNavigate()`.

```jsx
const navigate = useNavigate();
<Button
  type="back"
  onClick={(event) => {
    event.preventDefault(); // because this button is part of form element
    navigate(-1); // navigate to before history
  }}
>
  &larr; Back
</Button>;
```

[Next: Programmatic navigation with <Navigate />](./16-programmatic-navigation-with.md)

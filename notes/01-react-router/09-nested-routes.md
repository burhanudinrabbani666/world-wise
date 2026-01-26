# NESTED ROUTES AND INDEX ROUTE

`index` meaning is default content

```jsx
<BrowserRouter>
  <Routes>
    <Route index element={<Homepage />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="product" element={<Product />} />
    <Route path="login" element={<Login />} />
    <Route path="app" element={<AppLayout />}>
      <Route index element={<p> List of city </p>} />
      <Route path="cities" element={<p>List of city</p>} />
      <Route path="country" element={<p>List of country</p>} />
      <Route path="form" element={<p>List of fields form</p>} />
    </Route>

    {/* Executed when nothing oath matched */}
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</BrowserRouter>
```

[Next: Implement cities lists](./10-implement-cities-lists.md)

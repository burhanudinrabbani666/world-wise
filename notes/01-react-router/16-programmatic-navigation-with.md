# PROGRAMMATIC NAVIGATION WITH NAVIGATE COMPONENTS

using `<Navigate/>` for more declarative

```jsx
<Route path="app" element={<AppLayout />}>
{/* Redirect to app/cities */}
<Route index element={<Navigate replace to="cities" />} />
```

[Next: Section 2 - Advance state management](../02-advance-state-management/)

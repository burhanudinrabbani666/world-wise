# CONSUMING CONTENT

# Atomic Blog

```jsx
const postContext = createContext();
```

```jsx
return (
  // 2) provide value to child components
  <postContext.Provider
    value={{
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }}
  >
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <Header />
      <Main />
      <Archive />
      <Footer />
    </section>
  </postContext.Provider>
);
```

example consuming `useContext()`

```jsx
// dont have using props anymore
function SearchPosts() {
  // 2) CONSUMING USE CONTEXT VALUE
  const { searchQuery, setSearchQuery } = useContext(postContext);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
```

[Next: Advanced pattern](./04-advanced-pattern.md)

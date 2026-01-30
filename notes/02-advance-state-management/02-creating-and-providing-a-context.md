# CREATING AND PROVIDING A CONTEXT

Context lets components pass information deep down without explicitly passing props.

Call createContext outside any components to create one or more contexts.

[https://react.dev/reference/react/createContext](https://react.dev/reference/react/createContext)

```jsx
// 1) CREATE NEW CONTEXT
const postContext = createContext();

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
```

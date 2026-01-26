# STYLING OPTIONS

## Styling options in react

**React doesn't care about styling:**

| Styling                    | Where                           | how?                   | Scope                                | Based on   |
| -------------------------- | ------------------------------- | ---------------------- | ------------------------------------ | ---------- |
| Inline CSS                 | JSX Element                     | style prop             | JSX Element                          | CSS        |
| CSS or Sass file           | External                        | className prop         | Entire app (global, causes problems) | CSS        |
| CSS modules                | One external fil per components | className Prop         | Components ✅                        | CSS        |
| CSS-in-JS                  | External file or components     | Creates new Components | Components                           | javaScript |
| Utility-first tailwind-css | JSX elements                    | classNameProp          | JSX element                          | CSS        |

> Alternative to styling with css: UI libraries like MUI, Mantine, ShadhCn

[Next: Using css modules](./06-using-css-modules.md)

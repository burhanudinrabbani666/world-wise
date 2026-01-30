# WHAT IS CONTEXT API

## A SOLUTION FOR PROP DRILLING

> Task: Passing state info mutiaple deeply nested child components

[PDF](/public/context-api.png)

## CONTEXT API

- System to pass data throughout the app without manually passing props down the tree
- Allows us to “broadcast” global state to the entire app
  1. Provider: gives all child components access to value
  2. value: data that we want to make available (usually state and functions)
  3. Consumers: all components that read the provided context value

[Atomic blog app](https://github.com/burhanudinrabbani666/atomic-blog)

[Next: Creating and providing a context](./02-creating-and-providing-a-context.md)

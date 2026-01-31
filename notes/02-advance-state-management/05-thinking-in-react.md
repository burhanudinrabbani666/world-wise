# THINKING IN REACT: ADVANCE STATE MANAGEMENT

what is state management? state management is giving each piece of state the right **home**

- **when** the use state?
- **types** of state (accessibilty): local vs global

## TYPE OF STATE

1. STATE ACCESSIBILTY

**local state:**

- need only by one or few components
- only accessiable in components and child components

**global state:**

- might be needed by many components
- accesible to every components in the application

2. STATE DOMAIN

remote state:

- All components data loaded from a remote server (API)
- Usually a asynchronus
- Needs re-fetching + updating

UI state

- Everything else
- Theme, list filters, from data, etc
- Usualy synchronus and stored inthe application

## STATE PLACEMENETS OPTIONS

| Where to place state | Tools                                | When to use                         |
| -------------------- | ------------------------------------ | ----------------------------------- |
| Local components     | useState, useReducer, useRef         | Local state                         |
| Parent components    | useState, useReducer, useRef         | Lifitng up state                    |
| Context              | Context API + useState or useReducer | Global state (preferably UI state)  |
| 3rd-party library    | Redux, React query, SWR, Zustad, etc | Global state (remote UI)            |
| Parent components    | useState, useReducer, useRef         | Lifitng up state                    |
| URL                  | React router                         | Global state, passing between pages |
| Browser              | Local storage, session storage, etc  | Storing data in users browser       |

## STATE MANAGEMENT TOOL OPTIONS

How to manage different type of state in practice?

| State Domain ⬇️ / State Acccesibility ➡️ | Local state                                  | Global State                                                                                                            |
| ---------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UI State                                 | - useState <br/> - useReducer <br/> - useRef | - Context API + useState/useReducer <br/> - Redux, Zustand,Recall, etc <br/> - React query                              |
| Remote State                             | fetch + useEffect + useState/useReduce       | - Context API + useState/useReducer <br/> - Redux, Zustard,Recall, etc <br/> - ReactQuery <br/> - SWR <br/> - RTK Query |

[Next: Creating city context](./06-creating-city-context.md)

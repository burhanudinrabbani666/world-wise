# STORING STATE IN THE URL

The URL is an excellent place to store UI state nd an alternative in some situation! Examples: open/closed panels, currently selected list item, llist storing order, applied list filters

1. Easy way to store state in global place, accessible to all components in the app
2. Good way to pass data from one page to next page
3. Makes it possible to bookmark and share the page with the exact UI state it had at the time

## EXAMPLE: PARAMS AND QUERY STRING

> www.example.co/app/cities/lisbon?lat=38.728&lng=-9.141

`lisbon` is params
`lat=38.728&lng=-9.141` is query string

[Next: dynamic-routes](./13-dynamic-routes.md)

# CRUD APPLICATION QUERYS, AND MUTATION

## Create

```graphql
mutation AddGame($game: AddGameInput!) {
  addGame(game: $game) {
    id
    title
    platform
  }
}
```

## Read

```graphql
query GetGames {
  games {
    id
    title
    platform
  }
}
```

## Read with id

```graphql
query GetGame($id: ID!) {
  game(id: $id) {
    id
    title
    platform
  }
}
```

input

```json
{
  "id": "1"
}
```

## Update with id

```graphql
mutation UpdateGame($id: ID!, $edits: EditGameInput) {
  updateGame(id: $id, edits: $edits) {
    title
    platform
  }
}
```

input

```json
{
  "id": "1",
  "edits": {
    "title": "Zelda, Tears of the Kingdom 2",
    "platform": ["Switch", "PC"]
  }
}
```

## Delete with id

```graphql
mutation DeleteGame($id: ID!) {
  deleteGame(id: $id) {
    id
    title
    platform
  }
}
```

input

```json
{
  "id": "2"
}
```

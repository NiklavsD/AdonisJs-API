# AdonisJs-API

**I used build-in lucid(db query builder) to create SQLite db.**

GET method - List of all items, including IDs and creation date
http://127.0.0.1:3333/items

POST method - Accepts JSON body input parameeter and stores a new item.
http://127.0.0.1:3333/items
```json
{
    "name": "Car"
}
```

DELETE method - Destroys specified /items/{id} item
http://127.0.0.1:3333/items/{id}

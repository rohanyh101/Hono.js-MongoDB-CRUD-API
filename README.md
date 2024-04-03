# A Simple CRUD Application Using MongoDB And Hono.js Runtime

## Run Instructions,

```
npm i
npm run start
```

## some CURL commands to execute...

- getting server status =>
```
curl --location --request GET 'localhost:3000/api/v1/status' `
--header 'Content-Type: application/json'
``` 

- getting All Users status =>
```
curl --location --request GET 'localhost:3000/api/v1/users' `
--header 'Content-Type: application/json'
```

- getting a single User =>
```
curl --location --request GET 'localhost:3000/api/v1/users/1' `
--header 'Content-Type: application/json'
```

- add a new user to database =>
```
curl --location --request POST 'localhost:3000/api/v1/adduser' `
--header 'Content-Type: application/json' `
--data-raw '{ "name": "mahal", "age": 24, "email": "mahal@gmail.com", "password": "114313651" }'
```

- update a single user =>
```
curl --location --request PUT 'localhost:3000/api/v1/updateuser/660d3f6d3dfc96f6f79fdb58' `
--header 'Content-Type: application/json' `
--data-raw '{ "name": "natasha", "age": 22, "email": "natasha@gmail.com", "password": "114351651" }'
```

- delete a single user from database => 
```
curl --location --request DELETE 'localhost:3000/api/v1/deleteuser/660d3f6d3dfc96f6f79fdb59' `
--header 'Content-Type: application/json'
```

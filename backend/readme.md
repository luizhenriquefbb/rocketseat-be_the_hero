## About the backend

This component is the backend. Is a API REST that serves both mobile application and web application (**add link**).

It was made in node and uses handful libraries like:

- express
    - mini framework just to receive and send HTTP posts
- SQL as database
    - most common database type
- knex
    - a query builder to make our SQL queries, so if/when we choose to change from SQLLite to mySQL or postgreSQL or Oracle, we don need to worry about the syntax of the query


## How to install

Install yarn

```sh
...TODO...
```

Then install the project dependencies

```sh
yarn
```

## how to run

in development mode
```sh
yarn dev
```

in production
```sh
yarn execute
```
## About

This app consist in a dockerized login system built with:

- ReactJS and styled-components
- NodeJS
- Knex
- JWT
- PostgreSQL
- Nginx
- Docker
 


## Requirements

- Docker
- Docker-compose

You can find how install Docker in your OS [here](https://docs.docker.com/engine/install/) and Docker-compose [here](https://docs.docker.com/compose/install/).

## How to run

In the root folder run the command:

```bash
docker-compose up --build
```

--build is necessary only at first time running docker-compose, next ones you should delete this command.

## Add first user

To add the first user in database, you should send a `POST` request to `localhost:5000/api/user` adding the following block to body request

```bash
{
    "email" : "<your-email>",
    "password": "<your-password>",
    "firstName": "<your-first-name>",
    "lastName" : "<your-last-name>"    
}
```

Receiving the `id` response, you are ready to use the login system.

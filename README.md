# About The Project

Backend Coding Challenge - This is the PUBLIC SERVICE from the subscription project that consists of 3 microservices:

1.Public Service: Backend for Frontend microservice to be used by UI frontend.

2.Subscription Service: microservice implementing subscription logic, including persistence of
subscription data in a database and email notification to confirm process is completed.

3.Email Service: microservice mocking email notifications. 


## Tech Stack

NodeJS version: 19.7.0

NestJs

Docker


## Getting Started

To start developing the project please check if you have these tools installed on your machine:

* [Node.js](https://nodejs.org/en/download/)
* [Docker](https://www.docker.com/get-started)

### Installation

1. Clone the repo

```sh
git clone https://github.com/eduardoucv/public-service
```

2. Move into public-service folder

```sh
cd public-service
```


3. Install dependencies

```sh
npm install
```

4. Run docker-compose to start development environment

```sh
docker-compose up
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Get all subscriptions

```http
  GET http://localhost:3000/subscriptions
```


#### Get details of a subscription

```http
  GET http://localhost:3000/subscriptions/{subscriptionId}
```

| Parameter         | Type     | Description                                |
| :--------         | :------- | :--------------------------------          |
| `subscriptionId`  | `string` | **Required**. Id of subscription to fetch  |


#### Create new subscription

```http
  POST http://localhost:3000/subscriptions
  {
    "email": "string",
    "firstName": "string",
    "lastName": "string",
    "gender": "string",
    "dateOfBirth": "1986-12-28T00:00:00.000Z",
    "consent": true,
    "newsletterId": "string"
}
```


#### Cancel existing subscription

```http
  DELETE http://localhost:3000/subscriptions/{subscriptionId}
```

| Parameter         | Type     | Description                                 |
| :--------         | :------- | :--------------------------------           |
| `subscriptionId`  | `string` | **Required**. Id of subscription to delete  |



## Authors

- [@eduardoucv](https://www.github.com/eduardoucv)


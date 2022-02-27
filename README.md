<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# Topics
- [Description](#-description)
- [Technologies](#-technologies)
- [Clone](#-clone)
- [Tests](#-tests)


## 🎯 Description

The **School Dreams APi** is a project to management school functionality such as Students, teachers, employees, suppliers.

This project is agnostic GraphQl but if you need a front-end you may clone [School Admin Front-end](https://github.com/robsonmvieira/school-admin)
## Some highlight Points

- Unit Testing
- Hexagonal architecture
- Adapter patterns
- Repository patterns

---
## Technologies

 The project is using the follow technologies:

- [Nest](https://github.com/nestjs/nest)
- [Jest](https://jestjs.io/)
- [GraphQl](https://graphql.org/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)


---
## Disclaime
  As i Told above, the project using relational Database then you need provide this in your local machine either using Docker or installed.

## Clone
```bash
  # cloning the project
  $ git clone https://github.com/robsonmvieira/school-dreams-api
```

## Installation
```bash
  # install dependencies
  $ yarn
```
## Docker-compose
```bash
  # Creating container with services
  $ docker-compose up -d
```

## Run Prisma Migration
```bash
  # Run migrations
  $ npx prisma migrate dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## GraphQl playground
```bash
# testing queries and mutations
$ http://localhost:8000/graphql
```

## Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).

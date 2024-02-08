# Multiple Database Connections with NestJS

A project with an example of multiple database connections.

Sometimes you need to get information from more than one database in a single project. This project is an example of how to connect a NestJS project to multiple databases with library Typeorm integration.


## Installation

You need to install [Node](https://nodejs.org/en/) first. 

Then, you can install [NestJS](https://docs.nestjs.com/) by running next command:
```bash
$ npm i -g @nestjs/cli
```

Finally, install all project dependencies running next command:
```bash
$ npm install
```


## Routes

Here are the routes you need to use:

* `/conn-a` (Get): gets content from a table of database connection 'A'


* `/conn-b` (Get): gets content from a table of database connection 'B'


## Local Development

You can run these on the command line in the root of your project:

* `npm start`: starts development server
* `npm run build`: generates a production build

To customize the port and database connections, edit `src/.env` with your details.

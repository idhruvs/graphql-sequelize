# GraphQL-to-SQL API Service

This simple node app serves as example of a GraphQL API service in front of a legacy SQL database.
It shows usage of Sequelize to interact with a MSSQL database.

## Installation / Development

**Prerequisites:**

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [Babel](https://babeljs.io/docs/usage/cli/)
* MSSQL (with an Items table as described in `models/items/ItemModel.js`)

**Installation:**

1. Clone this repo
2. Install dependencies: `npm install`
3. Run the service: `npm start`

Feel free to submit pull requests for enhancements!

**Testing:**

1. `npm test` will run any tests in the `test` folder

## Schema / Models

Currently only a generic model of "Items" has been implemented. It can serve as a guide to add more models to expose (both in Sequelize and GraphQL).

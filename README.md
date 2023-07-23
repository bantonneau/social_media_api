# Social Network API

[![License Badge](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)

## Description

The Social Network API is a server-side application that serves as the back end for a social network site. The application provides API routes to manage users, thoughts, and reactions in the social network's database. It uses Mongoose to interact with a MongoDB database and Express.js to handle server-side routing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:

```bash
npm install
```

4. Seed the database by running the following command:

```bash
node seeds.js
```

## Usage

To start the server, run the following command in your terminal:

```bash
npm start
```

Once the server is running, you can interact with the API using a tool like Insomnia Core or Postman.

## API Routes

The Social Network API provides the following API routes:

**User Routes**
- `GET /api/users`: Retrieves all users along with their thoughts and friends.
- `GET /api/users/:id`: Retrieves a single user by ID.
- `POST /api/users`: Creates a new user.
- `PUT /api/users/:id`: Updates a user by ID.
- `DELETE /api/users/:id`: Deletes a user by ID.

**Thought Routes**
- `GET /api/thoughts`: Retrieves all thoughts.
- `GET /api/thoughts/:id`: Retrieves a single thought by ID.
- `POST /api/thoughts`: Creates a new thought.
- `PUT /api/thoughts/:id`: Updates a thought by ID.
- `DELETE /api/thoughts/:id`: Deletes a thought by ID.

**Reaction Routes (as part of Thought)**
- `POST /api/thoughts/:thoughtId/reactions`: Creates a new reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Deletes a reaction by ID from a thought.

**Friend Routes (as part of User)**
- `POST /api/users/:userId/friends/:friendId`: Adds a new friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Removes a friend from a user's friend list.

## Questions

If you have any questions or issues, feel free to reach out to me via one of the following channels:

Email: [benantonn@gmail.com](mailto:benantonn@gmail.com)

GitHub: [@bantonneau](https://github.com/bantonneau)

## Credits

This project was developed by Ben Antonneau. The Social Network API leverages the following technologies:

- [Express.js](https://expressjs.com/): A fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.
- [Moment.js](https://momentjs.com/): A JavaScript date library for parsing, validating, manipulating, and formatting dates.

Special thanks to the contributors of the open-source libraries and frameworks used in this project for their valuable work.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.


# NodeJS Cyclic MongoDB

This repository contains a Node.js server built with Express.js and MongoDB. The server provides APIs for managing users, records, and comments. JSON Web Tokens (JWT) are used for user authentication and authorization of certain resources.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/viktor-dimitrov/NodeJS-Cyclic-MongoDB.git
cd NodeJS-Cyclic-MongoDB
```

2. Install dependencies:

```bash
npm install
```

3. Configure the database:

The server uses MongoDB to store data. Make sure you have a MongoDB instance to connect to. Update the database settings in the `index.js` file:

```javascript
const mongoose = require('mongoose');
const dbURI = 'mongodb://your-mongodb-connection-string';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
```

Replace `'mongodb://your-mongodb-connection-string'` with the connection string to your MongoDB database.

4. Start the server:

```bash
npm run dev
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## Architecture

- `index.js`: The main file of the application, where the Express server is started, and the database connection function is called.

- `routes.js`: This file contains the declarations of all routes in the application. It defines routes for users, records, and comments.

- `middlewares/authMiddleware.js`: This file contains middleware functions for user authentication and authorization checks.

- `managers/authManager.js`: This file contains the business logic for user operations such as registration and login.

- `managers/recordManager.js`: This file contains the business logic for record operations.

- `managers/commentManager.js`: This file contains the business logic for comment operations.

- `models/record.js`: This file contains the definition of the record model for the database.

## Routes

### Users

#### `POST /users/register`

Registers a new user in the system.

Parameters:
- `username`: username
- `password`: password
- `email`: email address
- `phone`: phone number

#### `POST /users/login`

Performs user login.

Parameters:
- `username`: username
- `password`: password

#### `GET /users/me`

Returns information about the logged-in user.

### Comments

#### `GET /data/comments/:recordId`

Returns all comments associated with a specific record.

Parameters:
- `recordId`: identifier of the record

#### `POST /data/comments`

Creates a new comment for a given record.

Parameters:
- `recordId`: identifier of the record
- `text`: comment text

### Records

#### `GET /data/records`

Returns all records in the system.

#### `GET /data/records/:_id`

Returns information about a specific record.

Parameters:
- `_id`: identifier of the record

#### `POST /data/records`

Creates a new record.

Parameters:
- `artist`: artist
- `title`: title
- `year`: year
- `style`: style
- `imageUrl`: URL of the record image

#### `POST /data/records/:_id/edit/:_userId`

Edits a record.

Parameters:
- `_id`: identifier of the record
- `_userId`: identifier of the user
- `artist`: artist
- `title`: title
- `year`: year
- `style`: style
- `imageUrl`: URL of the record image

#### `DELETE /data/records/:_id/delete/:_userId`

Deletes a record.

Parameters:
- `_id`: identifier of the record
- `_userId`: identifier of the user

## Contributors

- Viktor Dimitrov

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.


## Project Information

- GitHub Repository: [https://github.com/viktor-dimitrov/NodeJS-Cyclic-MongoDB](https://github.com/viktor-dimitrov/NodeJS-Cyclic-MongoDB)
- Author: Viktor Dimitrov
 

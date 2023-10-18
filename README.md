# Social Network API

## Description

The Social Network API is a web application that provides a backend API for a social network platform. Users can share their thoughts, react to friends' thoughts, and create a friend list. This project uses Express.js for routing, a MongoDB database for data storage, and the Mongoose ODM for database interactions. It's designed to handle a large amount of unstructured data efficiently.

### Motivation

The motivation behind this project is to gain hands-on experience in building a backend API for a social network platform. It involves working with NoSQL databases (MongoDB), Express.js, and Mongoose, which are common technologies used in real-world social network applications.

### Problem Solved

This project addresses the need for a scalable and flexible API to support social networking features. It allows users to perform CRUD (Create, Read, Update, Delete) operations on thoughts and users, add and remove friends from their friend list, and create and remove reactions to thoughts.

### Key Learnings

While working on this project, you'll learn about:

- Building a RESTful API with Express.js
- Working with NoSQL databases and MongoDB
- Implementing CRUD operations for thoughts and users
- Handling relationships between users and their friends
- Adding and removing reactions to thoughts

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Credits](#credits)
- [License](#license)

## Installation

To get the project up and running, follow these steps:

1. Clone the repository to your local machine.
2. Install the required npm packages using the following command:

   ```bash
   npm install
3. Create a .env file and add your MongoDB connection string (MONGO_URI) to it.
4. Start the application using:

    ```bash
    npm start
## Usage

### Testing API Routes

You can test the API routes using a tool like Insomnia. Here are the available routes:

#### User Routes:
- GET all users
- GET a single user by ID
- POST a new user
- PUT to update a user by ID
- DELETE to remove a user by ID

#### Friend Routes:
- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

#### Thought Routes:
- GET to get all thoughts
- GET to get a single thought by ID
- POST to create a new thought
- PUT to update a thought by ID
- DELETE to remove a thought by ID

#### Reaction Routes:
- POST to create a reaction stored in a thought's reactions array field
- DELETE to pull and remove a reaction by the reaction's ID

### Walkthrough Video

 [![Video](https://img.youtube.com/vi/12xk-yk9Hx-w1uJxPwJ3vOvMow3TArNbk/0.jpg)](https://drive.google.com/file/d/12xk-yk9Hx-w1uJxPwJ3vOvMow3TArNbk/view)

### API Routes

For detailed information about the available API routes and request/response examples, refer to the [API Routes documentation](API-Routes.md).

### Credits

- [Codingobliqua](https://github.com/Codingobliqua)
- [SocialHour18](https://github.com/CodingObliqua/SocialHour18)

### License

This project is licensed under the terms of the MIT License.
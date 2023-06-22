# Social_Network_API

![License:MIT](http://img.shields.io/badge/license-MIT-blue.svg)

## Description

The goal for this challenge was to create an API for a social network that uses a NoSQL database so the website can handle large amounts of unstructured data. When the server is started, the Mongoose models are synced to the MongoDB database. When API GET, POST, PUT and DELETE routes are tested in Insomnia, users and thoughts are succesfully displayed, created, updated and deleted in a formatted JSON. Reactions to thoughts and friends to users can be created and deleted.

Watch this walkthrough:

[UserDemo](https://watch.screencastify.com/v/DQBd8Css6NSrN7PsxRBp)

[ThoughtDemo](https://watch.screencastify.com/v/ntcz3JK0dp42K6h2n3TM)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies used](#technologies)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Test](#tests)
- [Questions](#questions)

## Installation

- Copy the SSH link within this repo located under the green "Code" button.
- Clone the repo within GitBash by using the command "git clone `paste link here`"
- Run the command `npm init` to create a package.json file.
- Run the command `npm install` to get the dependencies installed.
- Run the command `npm install express`.
- Run the command `npm install mongoose`.
- Run the command `npm install moment`.

## Usage

Within the directory, the server is started by using the command `npm start`.

![image](https://github.com/AmyEdmond/Social_Network_API/assets/122325607/ab4e1407-cdb4-4f91-90c1-13401be3a858)
![image](https://github.com/AmyEdmond/Social_Network_API/assets/122325607/01f6f531-bbaf-4ec9-be43-01d3d1ed8d44)

## Technologies

- JavaScript
- Node.js
- MYSQL
- MongoDB
- Mongoose ODM
- Express

## Credits

Amanda P. Edmond

## License

This project is license under: [MIT](https://lbesson.mit-license.org/)

## Contributions

If you see something in this project that could be improved, you can do a feature request with updated code so I can review your changes.

## Tests

---

**`/api/users`**

- `GET` all users
- `POST` a new user:
  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```

---

**`/api/users/:userid`**

- `GET` a single user by its `_id`
- `PUT` to update a user by its `_id`
- `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list
- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts
- `POST` to create a new thought
  ```json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```

---

**`/api/thoughts/:thoughtId`**

- `GET` to get a single thought by its `_id`
- `PUT` to update a thought by its `_id`
- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction
  ```json
  {
    "reactionBody": "Hell Yeah!!",
    "username": "lernantino"
  }
  ```

---

**`/api/thoughts/:thoughtId/reactions/:reactionId`**

- `DELETE` remove a reaction by the `reactionId`

## Questions

If you have any questions about this project, you can reach me at:

- Github: [AmyEdmond](https://github.com/AmyEdmond)
- Email: [e_amy0587@hotmail.com](e_amy0587@hotmail.com)

const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

const users = [];
//Routes
app.get('/users', (request, response) => {
  return response.json([
    'User 1',
    'User 2',
  ]);
});

app.post('/users', (request, response) => {
  // const { username, password } = request.body;
  // const user = { id: uuid(), username, password };

  // users.push(user);

  // return response.json(project);
  return response.json([
    'User 1',
    'User 2',
    'User 3'
  ]);
});

app.put('/users/:id', (request, response) => {
  return response.json([
    'User 5',
    'User 2',
    'User 3',
  ]);
});

app.delete('/users/:id', (request, response) => {
  return response.json([
    'User 2',
    'User 3',
  ]);
});

// SCRIPT: & nodemon src/backend/api.js
//Listen
app.listen(3000, () => console.log('Back-end started 🚀'));
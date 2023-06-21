const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Enable CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

let users =  [
    {
      id: 1,
      email: "user1@gmail.com",
      password: "password1"
    },
    {
      id: 2,
      email: "user2@gmail.com",
      password: "password2"
    },
    {
      id: 3,
      email: "user3@gmail.com",
      password: "password3"
    },
    {
      email: "user4@gmail.com",
      password: "password4",
      id: 4
    },
    {
      email: "malwandla@gmail.com",
      password: "malwandla",
      id: 5
    }
  ]
; // In-memory user storage

// GET request to fetch all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST request to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT request to update an existing user
// app.put('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const updatedUser = req.body;
//   const index = users.findIndex(user => user.id === id);
  
//   if (index !== -1) {
//     users[index] = { ...users[index], ...updatedUser };
//     res.json(users[index]);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// DELETE request to remove a user
// app.delete('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const index = users.findIndex(user => user.id === id);
  
//   if (index !== -1) {
//     const deletedUser = users.splice(index, 1);
//     res.json(deletedUser);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

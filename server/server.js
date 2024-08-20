const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ruah@123',
    database: 'expense_calculator'
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  });

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

/*****************************************************/
app.post('/signup', (req, res) => {
    const { first_name, last_name, email, gender, role, password } = req.body;
    const id = uuidv4(); // Generate UUID
    const INSERT_USER_QUERY = `INSERT INTO users (id, first_name, last_name, email, gender, role, password) VALUES (?, ?, ?, ?, ?, ?,?)`;
    connection.query(INSERT_USER_QUERY, [id, first_name, last_name, email, gender, role, password], (err, results) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).send('Error creating user');
      } else {
        console.log('User created successfully');
        res.status(201).send('User created successfully');
      }
    });
  });


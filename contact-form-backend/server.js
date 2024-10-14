const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');  // Use require for mysql2

const app = express();
app.use(cors());
app.use(express.json());  // Corrected to use express.json()

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pandan@2002',  
  database: 'contactFormDB'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// API endpoint to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Insert form data into the MySQL database
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ message: 'Failed to submit contact form', error: err });
    } else {
      res.status(201).json({ message: 'Contact form submitted successfully' });
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

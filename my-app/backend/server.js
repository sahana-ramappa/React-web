import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

// Mock user data for login
const users = [
  { username: 'vin_diesel', password: 'password123' }, // Valid user
  { username: 'wrong_user', password: 'wrong_pass' } // Invalid user
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match a valid user
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials. Please try again.' });
  }
});

app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});

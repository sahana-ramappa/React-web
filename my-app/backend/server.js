const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all requests
app.use(cors());

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Handle login logic here...
  res.json({ message: 'Login successful' });
});

app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});

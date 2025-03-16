// Create web server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample comments data
let comments = [
  { id: 1, text: 'This is a great post!' },
  { id: 2, text: 'I learned a lot from this.' },
];

// Route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,
    text: req.body.text,
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Route to delete a comment
app.delete('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id, 10);
  comments = comments.filter(comment => comment.id !== commentId);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
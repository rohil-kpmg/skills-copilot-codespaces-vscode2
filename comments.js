// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Data
let comments = [
    { id: 1, author: 'Anonymous', text: 'Hello, World!' },
    { id: 2, author: 'Anonymous', text: 'Hello, Universe!' },
    { id: 3, author: 'Anonymous', text: 'Hello, Galaxy!' }
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('Comment not found');
    } else {
        res.json(comment);
    }
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,  
        author: req.body.author,
        text: req.body.text
    };
    comments.push(comment);
    // Rest of the code...
});

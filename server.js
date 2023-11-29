const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (Make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a user schema
const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Serve your HTML and CSS
app.use(express.static('public'));

// Endpoint for user registration
app.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const newUser = new User({ email, username, password });
        await newUser.save();
        res.status(201).send('User registered successfully!');
    } catch (error) {
        res.status(500).send('Error registering user.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

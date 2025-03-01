// server.js
const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

// Example keys for demonstration
const p = 23; // A prime number
const g = 5;  // A generator for the group
const secretKey = 6; // User's secret key

// Storage for public verification keys
const publicKeys = {};

// User Registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const publicKey = Math.pow(g, secretKey) % p;

    publicKeys[username] = publicKey;
    res.status(200).send({ publicKey });
});

// Authentication
app.post('/authenticate', (req, res) => {
    const { username, r, s, c } = req.body;
    const publicKey = publicKeys[username];

    if (!publicKey) {
        return res.status(404).send('User not found');
    }

    const C = Math.pow(g, r) % p;
    const lhs = Math.pow(g, s) % p;
    const rhs = (C * Math.pow(publicKey, c)) % p;

    if (lhs === rhs) {
        res.status(200).send('Authentication successful');
    } else {
        res.status(401).send('Authentication failed');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

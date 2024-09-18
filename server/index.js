const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8080;

// Secret key for signing JWT tokens
const JWT_SECRET = "your_secret_key";

// Middleware to parse JSON bodies
app.use(express.json());

// Mock user database (in a real app, this would be in a database)
const users = [];

app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ username, password: hashedPassword });

    res.json({ message: "User registered successfully!" });
});

// Login route (authenticate user and provide JWT)
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).json({ error: "Invalid username or password" });
    }

    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid username or password" });
    }

    // Create a JWT token
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
});

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    // Check if there is a token
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Protected route (only accessible with a valid token)
app.get("/api/home", authenticateToken, (req, res) => {
    res.send(`Welcome to the home page, ${req.user.username}`);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

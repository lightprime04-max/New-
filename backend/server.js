const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running");
});
let users = []; // temporary storage

// Signup
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password });
  res.send("User registered");
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

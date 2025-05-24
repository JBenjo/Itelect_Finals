const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/transfer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'transfer.html'));
});
app.get('/history.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'history.html'));
});

app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
});

app.get('/register.html', (req, res ) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/history.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'history.html'));
});

app.get('/send-money.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'send-money.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
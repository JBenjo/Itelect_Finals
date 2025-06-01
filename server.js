const express = require('express');
const app = express();
const path = require('path');

<<<<<<< HEAD
app.use('/public', express.static(path.join(__dirname, 'public')));
=======
app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> d8484320019db9853853aba82ae01c5ab9ca1ef0

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

<<<<<<< HEAD
app.get('/register.html', (req, res ) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/add-cash.html', (req, res ) => {
    res.sendFile(path.join(__dirname, 'add-cash.html'));
=======
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
>>>>>>> d8484320019db9853853aba82ae01c5ab9ca1ef0
});

app.get('/history.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'history.html'));
});

app.get('/send-money.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'send-money.html'));
});

<<<<<<< HEAD
app.get('/transfer.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'transfer.html'));
});
app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
}); 
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
}); 
app.get('/faq.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});
app.get('/terms.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/privacy.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy.html'));
} );


app.get('/pay-bills.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pay-bills.html'));
});

app.get('/settings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'settings.html'));
});

=======
>>>>>>> d8484320019db9853853aba82ae01c5ab9ca1ef0
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

<<<<<<< HEAD
app.get('/help.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'help.html'));
});

app.get('/services.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});


=======
>>>>>>> d8484320019db9853853aba82ae01c5ab9ca1ef0
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
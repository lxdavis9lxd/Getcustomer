const express = require('express');
const path = require('path');

const app = express();

// Set ejs as the templating engine
app.set('view engine', 'ejs');

// Set up the Express application
app.use(express.static(path.join(__dirname, 'public')));

// Import the customer route
const customerRouter = require('./routes/customer');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

// Use the customer route for /customer endpoint
app.use('/customer', customerRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

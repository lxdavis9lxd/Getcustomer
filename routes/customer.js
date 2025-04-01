const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('customer');
});

router.post('/', (req, res) => {
  // Handle customer information submission
  const { name, address, phone, id, email } = req.body;
  // Add logic to save customer information
  res.send('Customer information submitted');
});

router.post('/delete', (req, res) => {
  // Handle customer information deletion
  const { deleteId } = req.body;
  // Add logic to delete customer information
  res.send('Customer information deleted');
});

module.exports = router;

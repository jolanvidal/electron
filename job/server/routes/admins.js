const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username, password });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }   
    res.json({ success: true, admin });
    } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    }
});

// Create
router.post('/', async (req, res) => {
  const admin = new Admin({
    username: req.body.username,
    password: req.body.password
  });
    try {
        const newAdmin = await admin.save();
        res.status(201).json(newAdmin   );
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    }
});

module.exports = router;
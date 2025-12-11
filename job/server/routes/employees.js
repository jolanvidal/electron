const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

// All
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// One
router.get('/:id', getEmployee, (req, res) => {
  res.send(res.employee);
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const employee = await Employee.findOne({ username, password });
    if (!employee) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    res.json({ success: true, employee });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Create
router.post('/', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    age: req.body.age,
    salary: req.body.salary,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    }
});

// Update
router.patch('/:id', async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },  
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete all
router.delete('/', async (req, res) => {
  try {
    await Employee.deleteMany({});  
    res.json({ message: "All employees deleted successfully" });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

// Delete one
router.delete('/:id', async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// MIDDLEWARE
async function getEmployee(req, res, next) {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Cannot find employee' });
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.employee = employee;
    next();
}

module.exports = router;
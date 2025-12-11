const express = require('express');
const router = express.Router();
const Employer = require('../models/employer');

// All
router.get('/', async (req, res) => {
  try {
    const employers = await Employer.find();
    res.json(employers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// One
router.get('/:id', getEmployer, (req, res) => {
  res.send(res.employer);
});

// Create
router.post('/', async (req, res) => {
  const employer = new Employer({
    name: req.body.name,
    age: req.body.age,
    jobName: req.body.jobName    
  });
    try {
        const newEmployer = await employer.save();
        res.status(201).json(newEmployer);
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    }
});

// Update
router.patch('/:id', async (req, res) => {
  try {
    const updatedEmployer = await Employer.findByIdAndUpdate(req.params.id);
    if (!updatedEmployer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    res.json(updatedEmployer).status(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete all
router.delete('/', async (req, res) => {
  try {
    await Employer.deleteMany({}); 
    res.json({ message: "All employers deleted successfully" });
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
});

// Delete one
router.delete('/:id', async (req, res) => {
  try {
    const deletedEmployer = await Employer.findByIdAndDelete(req.params.id);

    if (!deletedEmployer) {
      return res.status(404).json({ message: "Employer not found" });
    }

    res.json({ message: "Employer deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// MIDDLEWARE
async function getEmployer(req, res, next) {
    let employer;
    try {
        employer = await Employer.findById(req.params.id);
        if (employer == null) {
            return res.status(404).json({ message: 'Cannot find employer' });
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.employer = employer;
    next();
}

module.exports = router;
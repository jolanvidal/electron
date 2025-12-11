const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({    
    name: { type: String, required: true },
    age: { type: Number, required: true },
    jobName: { type: String, required: true }    
}, { timestamps: true });

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
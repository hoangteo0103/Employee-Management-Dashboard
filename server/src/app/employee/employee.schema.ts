import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    city: String,
    ctc: String,
    salary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SalaryType'
    }
});
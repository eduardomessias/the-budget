import mongoose, { Schema } from 'mongoose'


const ExpenseSchema = new mongoose.Schema({
    label: String,
    amount: Number,
    when: Date,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})


module.exports = mongoose.models.Goal || mongoose.model ('Expense', ExpenseSchema)
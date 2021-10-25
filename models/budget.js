import mongoose from 'mongoose'


const BudgetSchema = new mongoose.Schema({
    label: String,
    from: Date,
    to: Date
})


module.exports = mongoose.models.Goal || mongoose.model ('Budget', BudgetSchema)
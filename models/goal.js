import mongoose from 'mongoose'


const GoalSchema = new mongoose.Schema({
    label: String,
    from: Date,
    to: Date
})


module.exports = mongoose.models.Goal || mongoose.model ('Goal', GoalSchema)
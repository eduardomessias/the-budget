import mongoose from 'mongoose'


const CategorySchema = new mongoose.Schema({
    label: String,
    Restriction: {
        type: String,
        enum: ['INCOME','EXPENSE','BOTH'],
        default: 'BOTH'
    }
})


module.exports = mongoose.models.Goal || mongoose.model ('Category', CategorySchema)
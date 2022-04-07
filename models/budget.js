import mongoose, { Schema } from 'mongoose'


const options = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}


const BudgetSchema = new mongoose.Schema({
    from: Date,
    to: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, options)


module.exports = mongoose.models.Budget || mongoose.model('Budget', BudgetSchema)
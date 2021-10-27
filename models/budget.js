import mongoose from 'mongoose'


const schemaOptions = {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}


const BudgetSchema = new mongoose.Schema({
    from: Date,
    to: Date
}, schemaOptions)


module.exports = mongoose.models.Budget || mongoose.model ('Budget', BudgetSchema)
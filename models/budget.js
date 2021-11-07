import mongoose, { Schema } from 'mongoose'


/**
 * @description 
 * Used to activate timestamps in the schema,
 * so mongoose automatically sets the creation and update timestamps when the document is saved.
 */
const schemaOptions = {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}


/**
 * Budget
 * @description
 * The budget is mainly composed by a period of time
 */
const BudgetSchema = new mongoose.Schema({
    from: Date,
    to: Date,
    goals: [{
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }],
    incomes: [{
        type: Schema.Types.ObjectId,
        ref: 'Income'
    }],
    expenses: [{
        type: Schema.Types.ObjectId,
        ref: 'Expense'
    }]
}, schemaOptions)


module.exports = mongoose.models.Budget || mongoose.model ('Budget', BudgetSchema)
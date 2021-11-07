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


const ExpenseSchema = new mongoose.Schema({
    label: String,
    amount: Number,
    when: Date,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    }
}, schemaOptions)


module.exports = mongoose.models.Goal || mongoose.model ('Expense', ExpenseSchema)
import mongoose from 'mongoose'


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


const CategorySchema = new mongoose.Schema({
    label: String,
    Restriction: {
        type: String,
        enum: ['INCOME','EXPENSE','BOTH'],
        default: 'BOTH'
    }
}, schemaOptions)


module.exports = mongoose.models.Goal || mongoose.model ('Category', CategorySchema)
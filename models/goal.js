import mongoose, { Schema } from 'mongoose'


const schemaOptions = {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}


const GoalSchema = new mongoose.Schema({
    label: String,
    deadline: Date,
    weight: {
        type: String,
        enum: ['WHATEVER','IF POSSIBLE','HOPE SO','LOOKING FORWARD','EXTREMELY IMPORTANT'],
        default: 'WHATEVER'
    },
    budgets: [{
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    }],
    achieved: Boolean
}, schemaOptions)


module.exports = mongoose.models.Goal || mongoose.model ('Goal', GoalSchema)
import mongoose from 'mongoose'


const schemaOptions = {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
}


const GoalSchema = new mongoose.Schema({
    label: String,
    from: Date,
    to: Date,
    weight: {
        type: String,
        enum: ['WHATEVER','IF POSSIBLE','HOPE SO','LOOKING FORWARD','EXTREMELY IMPORTANT'],
        default: 'WHATEVER'
    }
}, schemaOptions)


module.exports = mongoose.models.Goal || mongoose.model ('Goal', GoalSchema)
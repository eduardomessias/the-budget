//import createGoal from '../../../actions/createGoal'
import dbConnect from '../../../lib/mongo'
import Goal from '../../../models/goal'


export default async (req, res) => {
    if (req.method === 'POST') {
        try {
            const user = await Goal.create(req.body)
            res.status(201).json({ success: true, data: user })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    }
}
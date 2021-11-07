import dbConnect from '../../../lib/mongo'
import Budget from '../../../models/budget'


export default async function handler (req, res) {
    if (req.method === 'POST') {
        await dbConnect ()
        try {
            const budgets = JSON.parse(req.body.budgets)
            const goal = req.body.goal
            for (let budget in budgets) {
                const b = await Budget.find({_id:budget._id})
                if (b) {
                    b.goals.push(goal)
                    await b.save ()
                }
            }
            const doc = await Budget.save
            res.status (200).json ({ success: true, data: doc })
        } catch (error) {
            res.status (400).json ({ success: false })
        }
    } else {
        res.status (400).send ({success: false, message: "Only POST requests allowed"})
    }
}
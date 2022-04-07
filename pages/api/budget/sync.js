import withDatabase from '../../../middleware/withDatabase'
import Budget from '../../../models/budget'


async function syncBudget (budgets, goal) {
    budgets.forEach(async (budget)=> {
        const budgetModel = await Budget.findOne ({_id:budget._id})
        budgetModel.goals.push(goal)
        await budgetModel.save ()
    })
}


async function handler (req, res) {
    if (req.method === 'POST') {        
        try {
            await syncBudget (req.body.budgets, req.body.goal)
            res.status (200).json ({ success: true, data: budgets })
        } catch (error) {
            res.status (400).json ({ success: false, error: error })
        }
    } else {
        res.status (400).send ({success: false, message: "Only POST requests allowed"})
    }
}


export default withDatabase (handler)
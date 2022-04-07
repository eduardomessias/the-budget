import withDatabase from '../../../middleware/withDatabase'
import Budget from '../../../models/budget'


async function handler (req, res) {
    if (req.method === 'POST') {
        try {
            const doc = await Budget.create(req.body)
            res.status (200).json ({ success: true, data: doc })
        } catch (error) {
            res.status (400).json ({ success: false })
        }
    } else {
        res.status (400).send ({success: false, message: "Only POST requests allowed"})
    }
}

export default withDatabase (handler)
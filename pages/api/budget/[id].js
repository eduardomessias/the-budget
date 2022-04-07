import withDatabase from '../../../middleware/withDatabase'
import Budget from '../../../models/budget'


async function handler(req, res) {
    try {
        const { id } = req.query
        const budget = await Budget.findOne({ _id: id })
        res.status(200).json({ sucess: true, data: budget })
    }
    catch (e) {
        res.status(400).json({ success: false })
    }
}

export default withDatabase(handler)
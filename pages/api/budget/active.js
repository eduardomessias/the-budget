import withDatabase from '../../../middleware/withDatabase'
import Budget from '../../../models/budget'


async function handler(req, res) {
    try {
        const collection = await Budget.find({ active: true })
        res.status(200).json({ sucess: true, data: collection })
    }
    catch (e) {
        res.status(400).json({ success: false })
    }
}

export default withDatabase(handler)
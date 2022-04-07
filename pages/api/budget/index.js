import withDatabase from '../../../middleware/withDatabase'
import { Budget } from '../../../models/models'


async function handler(req, res) {
    try {
        const collection = await Budget.find()
        res.status(200).json({ sucess: true, data: collection })
    }
    catch (e) {
        res.status(400).json({ success: false, reason: e.message, data: null })
    }
}


export default withDatabase(handler)
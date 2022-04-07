import Goal from '../../../models/goal'
import withDatabase from '../../../middleware/withDatabase'
import withLookup from '../../../middleware/withLookup'


/**
 * /budget/overlay/YYYY-MM-DD
 * @description Returns a collection of budget documents which lookup query value overlaps its period (from, to)
 * @param {*} req Request
 * @param {*} res Response
 */
async function handler(req, res) {    
    try {    
        const lookup = req.lookup
        const overlap = await lookup.overlap
        const collection = await Goal.find({
            deadline: {
                $gte: overlap.from,
                $lte: overlap.to
            }
        })
        res.status(200).json({ sucess: true, data: collection })
    }
    catch (e) {
        res.status(400).json({ success: false, exception: e.message })
    }
}


export default withDatabase (withLookup (handler))
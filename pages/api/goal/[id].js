import withDatabase from '../../../middleware/withDatabase'
import Goal from '../../../models/goal'


export default async function handler (req,res) {
    try {
        console.log (`Request query: ${JSON.stringify(req.query)}`)
        const {id} = req.query
        const collection = await Goal.find ({_id:id})
        res.status (200).json ({sucess:true, data:collection})
    }
    catch (e) {
        res.status (400).json({success:false})
    }
}


export default withDatabase (handler)
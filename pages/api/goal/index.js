import withDatabase from '../../../middleware/withDatabase'
import Goal from '../../../models/goal'


async function handler (req,res) {    
    try {
        const collection = await Goal.find ()
        res.status (200).json ({sucess:true, data:collection})
    }
    catch (e) {
        res.status (400).json({success:false})
    }
}


export default withDatabase (handler)
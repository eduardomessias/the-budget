import dbConnect from '../../../lib/mongo'
import Budget from '../../../models/budget'


export default async function Budgets (req,res) {
    await dbConnect ()    
    try {
        const collection = await Budget.find ()
        res.status (200).json ({sucess:true, data:collection})
    }
    catch (e) {
        res.status (400).json({success:false})
    }
}
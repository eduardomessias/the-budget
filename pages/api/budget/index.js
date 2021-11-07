import dbConnect from '../../../lib/mongo'
import Budget from '../../../models/budget'


export default async function handler (req,res) {
    await dbConnect ()    
    try {
        const collection = await Budget.find ().populate ('goals')
        res.status (200).json ({sucess:true, data:collection})
    }
    catch (e) {
        res.status (400).json({success:false})
    }
}
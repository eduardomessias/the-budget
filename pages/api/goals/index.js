import dbConnect from '../../../lib/mongo'
import Goal from '../../../models/goal'

export default async (req,res) => {
    await dbConnect ()    
    try {
        const goals = await Goal.find ()
        res.status (200).json ({sucess:true,data:goals})
    }
    catch (e) {
        res.status (400).json({success:false})
    }
}
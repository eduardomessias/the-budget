import dbConnect from '../../../lib/mongo'
import Goal from '../../../models/goal'


export default async function handler (req, res) {
    if (req.method === 'POST') {
        await dbConnect ()
        try {
            const document = await Goal.create(req.body)
            res.status (200).json ({ success: true, data: document })
        } catch (error) {
            res.status (400).json ({ success: false })
        }
    } else {
        res.status (400).send ({success: false, message: "Only POST requests allowed"})
    }
}
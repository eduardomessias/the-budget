import dbConnect from '../../../lib/mongo'
import Goal from '../../../models/goal'


export default async function Create (req, res) {
    if (req.method === 'POST') {
        await dbConnect ()
        try {
            const user = await Goal.create(req.body)
            res.status(201).json({ success: true, data: user })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    }
}
import dbConnect from '../lib/mongo'


export default function withDatabase (handler) {
    return async (req, res) => {
        req.db = await dbConnect ()
        return handler (req, res)
    }
}
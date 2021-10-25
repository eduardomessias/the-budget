// import {query as q} from 'faunadb'
// import {faunaClient} from '../lib/fauna'


// export default async (collectionName) => {
//     let collection = await faunaClient.query(
//         q.Map(
//             q.Paginate(q.Documents(q.Collection(collectionName))),
//             q.Lambda((ref) => q.Get(ref))
//         )
//     )
//     return collection
// }

import dbConnect from '../lib/mongo'
import Goal from '../models/goal'

export default async (collectionName) => {
    await dbConnect ()    
    try {
        const goals = await Goal.find ({})
        res.status (200).json ({sucess:true,data:goals})
    }
    catch (e) {
        res.status (400).json({success:false})
    }
}


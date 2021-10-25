import createDocument from './createDocument'


export default async ({from,to,label}) =>  {
    let goal = await createDocument ('Goal', {from:from,to:to,label:label})
    return goal
}
import getCollection from './getCollection'


export default async () => {
    let goals = await getCollection('Goal')
    return goals
}
import { Web3Token } from 'web3-token'
import { Client, Create, Get, Index, Match, Ref, TimeAdd, Tokens } from 'faunadb'


const faunaClient = new Client({
    secret: process.env.FAUNADB_THE_BUDGET_SERVER_KEY_1
})


export default async function handler(req, res) {
    const { signedMessage } = JSON.parse(req.body)
    const { address } = await Web3Token.verify(signedMessage)
    try {
        const user = await faunaClient.query(Get(Match(Index('userByPublicaddressIdx'), address)))
        const token = await createToken(user.ref.id, 3600)
        res.status(200).json({ token: token.secret })
    } catch (err) {
        console.log('-->', err)
        if (err.name === 'NotFound') {
            const user = await registerUser(address)
            const token = await createToken(user.ref.id, 3600)
            res.status(200).json({ token: token.secret })
        }
    }
}


const registerUser = async (address) => {
    const user = {
        data: {
            publicaddress: address,
        }
    }
    return faunaClient.query(Create(Collection('user'), user))
}


const createToken = async (ref, ttl) => {
    const token = {
        instance: Ref(Collection('user'), ref),
        data: { type: 'access' },
        ttl: TimeAdd(Now(), ttl, 'seconds')
    }
    return faunaClient.query(Create(Tokens(), token))
}
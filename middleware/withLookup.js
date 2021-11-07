export default function withLookup(handler) {
    return (req, res) => {
        if ('lookup' in req.query) {
            if (req.query['lookup'][0] === 'overlap') {
                let overlap = {}
                if (req.query['lookup'][1].includes('..')) {
                    overlap = {
                        from: new Date(req.query['lookup'][1].split('..')[0]),
                        to: new Date(req.query['lookup'][1].split('..')[1])
                    }
                } else {
                    overlap = new Date(req.query['lookup'][1])
                }
                req.lookup = { overlap }
                return handler(req, res)
            }   
        } else {
            throw Error('Invalid lookup query')
        }
    }
}
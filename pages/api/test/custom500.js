export default async function handler (req, res) {
    res.status (500).json ({sucess:false, data:"Test custom 500"})
}
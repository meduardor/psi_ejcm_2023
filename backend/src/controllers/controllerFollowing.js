const Follow = require('../models/Following');


async function index(req, res){
    try {
        const following = await Follow.findAll();
        return res.status(200).json({following});
    } catch (error) {
        return res.status(500).json({error: error});
        
    }
}


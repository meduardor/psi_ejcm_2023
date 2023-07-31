const Follow = require('../models/Following');


async function index(req, res){
  try {
    const following = await Following.findAll();
    return res.status(200).json({following});
  catch (error) {
    return res.status(500).json({error: error});
        
  }
}

async function show(res, req) {
    const {id} = req.params;

    try {
      const following = await Following.findByPk(id);
    
    }catch(error) {
      
    }

    
  
}

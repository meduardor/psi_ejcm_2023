const Favorites = require('../models/Favorites');



// Função que retorna todos os Favoritos 
async function index(req, res) {
    try {
        const favorites = await Favorites.findAll();
        return res.status(200).json({favorites});
    } catch (error) {

        return res.status(500).json({error: error});
        
    }
}

async function destroy(req, res){
    const {id} = req.params;

    try {
        const favorites = await Favorites.destroy(req.body, {where: {id: id}});
        return res.status(200).json({message: "Delete favorites", favorites});    
    } catch (error) {

        return res.status(500).json({error: error});
        
    }
    
}
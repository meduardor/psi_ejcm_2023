const User = require('../models/User');
const Favorites = require('../models/Favorites.js');

//const index = async(res, req) => {}
// NOTE: Qual melhor abordagem arrow function ou uma função por extenso.
async function index(res, req){
  try {
    const user = await User.findAll();
    return res.status(200).json({user});
  } catch (error) {
    return res.status(500).json({error});
  }
};

//const show = async(res, req) => {}
async function show(res, req){
  const {id} = req.params;
  try {
    const user = await User.findByPk(id);
    return res.status(200).json({user});
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

// TODO: Terminar as funções do controller USER.
// Abordagem com arrow function 
const create = async(res, req) => {
  try {
    const newUser = {
      name:   req.body.name,
      email:  req.body.email,
      avatar: req.body.avatar,
      photos: req.body.photos,
      salt:   req.body.salt,
      hash:   req.body.hash,
      birthday:req.body.birthday,
      admin:  req.body.admin,
    };
    const user = await User.create(newUser);
    return res.status(200).json({message: "User create", user});
  } catch (error) {
    return res.status(500).json({error:error});
  }
};

// Função de atualização de usuario
const update = async(res, req) => {
  const {id} = req.params;
  try {
    const [updated] = await User.update(req.body, {where:{id: id}});
    if(updated){
      const user = User.findByPk(id);
      return res.status(200).json({message: "Update User", user});
    }
  } catch (error) {
    return res.status(500).json({error:error});
  }
}

// Função que deleta o user do banco de dados 
const destroy = async(res, req) => {
  const {id} = req.params;
  try {
    const user = await User.destroy(req.body, {where: {id: id}});
    return res.status(200).json({message: "Deleted User", user});
  } catch (error) {
    return res.status(500).json({error: error});
  }
}


/* Funções para controle das Associações */

// Função Seguir(Following) user
async function followUser(res, req){
  const {userId} = req.params;
  try{
    const userFollow = await User.findByPk(userId);
    await userFollow.addFollowing(userId);
    return res.status(200).json({message:"following", userFollow});
  }catch(error){
    return res.status(500).json({message: "Not following User"});
  }
}

// Função List Following
async  function listFollowingUser(res, req){}
// Função Deixar de Seguir(*DesFollowing) user
async function unFollowUser(res, req){}

/**/

// Função (Favoritar Imagens)
async function favoriteImage(res, req){
  const {userId, favoritesId} = req.params;
  try{
    const imageFavorites = await Favorites.findByPk(favoriteId);
    const userFavorites = await User.findByPk(userId);

    // NOTE: 
    await userFavorites.addFavorites(imageFavorites);

    res.status(200).json({message:"Image Favorited", imageFavorites});

    
  }catch(error){

    res.status(500).json({message: "error", error});
  }
}
// Função list Favorites Imagens
async function listFavoritesImage(res, req){}
// Função (DesFavoritar Imagens)
async function unFavoriteImage(res, req){}


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  followUser,
  favoriteImage
}

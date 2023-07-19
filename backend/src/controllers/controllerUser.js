const User = require('../models/User');


//const index = async(res, req) => {}
// Qual melhor abordagem arrow function ou uma função por extenso.
async function index(res, req){
    try {
        
        const user = await User.findAll();
        return res.status(200).json({user});
    
    } catch (error) {

        return res.status(500).json({error});
        
    }
};
const show = async(res, req) => {}
const create = async(res, req) => {}
const update = async(res, req) => {}
const destroy = async(res, req) => {}
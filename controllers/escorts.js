const Escort = require('../models/escort');

module.exports = {
    index,
    create,
    updateDone,
    deleteEscort,
    editEscort
};

async function index(req, res) {
    try {
        const escorts = await Escort.find({}).sort('done');
    res.status(201).json(escorts);
    } catch (error) {
    res.status(400).json({message: "something went wrong"});
    }
}
async function create(req, res) {
   try {
       req.body.createdBy = req.params.id
    await Escort.create(req.body)
    index(req, res);
} catch (error) {
    console.log(error)
    res.status(400).json({message: "something went wrong"});
    }
}

async function updateDone(req, res) {
    try {
        const escort = await Escort.findById(req.params.id)
    escort.done = !escort.done;
    await escort.save();
    index(req, res);
    } catch (error) {
        res.status(400).json({message: "something went wrong"});
        }
    }
    
    async function deleteEscort(req, res) {
        try {
           await Escort.findByIdAndDelete(req.params.id);
            index(req, res);
        } catch (error) {
            res.status(400).json({message: "something went wrong"});
            }
        }
    async function editEscort(req, res) {
        try{
            await Escort.findByIdAndUpdate(req.params.id, req.body);
            index(req, res);
        } catch (error) {
            res.status(400).json({message: "something went wrong"});
            }
    }
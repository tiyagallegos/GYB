const Request = require('../models/request');

module.exports = {
    indexRequest,
    createRequest,
    updateDoneRequest,
    deleteRequest,
    editRequest
};

async function indexRequest(req, res) {
    try {
        const requests = await Request.find({}).sort('done');
    res.status(201).json(requests);
    } catch (error) {
    res.status(400).json({message: "something went wrong"});
    }
}
async function createRequest(req, res) {
   try {
    await Request.create(req.body)
    index(req, res);
} catch (error) {
    res.status(400).json({message: "something went wrong"});
    }
}

async function updateDoneRequest(req, res) {
    try {
        const request = await Request.findById(req.params.id)
    request.done = !request.done;
    await request.save();
    index(req, res);
    } catch (error) {
        res.status(400).json({message: "something went wrong"});
        }
    }
    
    async function deleteRequest(req, res) {
        try {
           await Request.findByIdAndDelete(req.params.id);
            index(req, res);
        } catch (error) {
            res.status(400).json({message: "something went wrong"});
            }
        }
    async function editRequest(req, res) {
        try{
            await Request.findByIdAndUpdate(req.params.id, req.body);
            index(req, res);
        } catch (error) {
            res.status(400).json({message: "something went wrong"});
            }
    }
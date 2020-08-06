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
        req.body.createdBy = req.params.id
        await Request.create(req.body)
        indexRequest(req, res);
    } catch (error) {
     console.log(error)
     res.status(400).json({message: "something went wrong"});
    }
}

async function updateDoneRequest(req, res) {
    try {
        const request = await Request.findById(req.params.id)
        request.done = !request.done;
        await request.save();
        indexRequest(req, res);
    } catch (error) {
        res.status(400).json({message: "something went wrong"});
    }
}

async function deleteRequest(req, res) {
    try {
        await Request.findByIdAndDelete(req.params.id);
            indexRequest(req, res);
    } catch (error) {
            res.status(400).json({message: "something went wrong"});
    }
}        
    
async function editRequest(req, res) {
    try{
        await Request.findByIdAndUpdate(req.params.id, req.body);
        indexRequest(req, res);
    } catch (error) {
        res.status(400).json({message: "something went wrong"});
        }
}
const express = require('express');
const router = express.Router();
const requestCtrl = require('../controllers/requests');

//GET /api/todos
router.get('/', requestCtrl.indexRequest);
//POST /api/todos
router.post('/', requestCtrl.createRequest);
//Put /api/todo/:id
router.put('/:id', requestCtrl.updateDoneRequest);
//delet /api/todo/:id
router.delete('/:id', requestCtrl.deleteRequest);
//put /api/todos/:id/edit
router.put('/:id/edit', requestCtrl.editRequest);

module.exports = router


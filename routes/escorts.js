const express = require('express');
const router = express.Router();
const escortCtrl = require('../controllers/escorts');

//GET /api/todos
router.get('/', escortCtrl.index);
//POST /api/todos
router.post('/', escortCtrl.create);
//Put /api/todo/:id
router.put('/:id', escortCtrl.updateDone);
//delet /api/todo/:id
router.delete('/:id', escortCtrl.deleteEscort);
//put /api/todos/:id/edit
router.put('/:id/edit', escortCtrl.editEscort);

module.exports = router
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const escortCtrl = require('../../controllers/escorts');
const requestCtrl = require('../../controllers/requests');

/*---------- User Login/signup Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

//Escort Routes
router.get('/', escortCtrl.index);
router.post('/:id/escorts', escortCtrl.create);
router.put('/:id/escorts', escortCtrl.updateDone);
//delet /api/todo/:id
router.delete('/:id/escorts', escortCtrl.deleteEscort);
//put /api/todos/:id/edit
router.put('/:id/escorts/edit', escortCtrl.editEscort);

//Request Routes
router.get('/', requestCtrl.indexRequest);
router.post('/:id/requests', requestCtrl.createRequest);
router.put('/:id/requests', requestCtrl.updateDoneRequest);
router.delete('/:id/requests', requestCtrl.deleteRequest);
router.put('/:id/requests/edit', requestCtrl.editRequest);

module.exports = router;


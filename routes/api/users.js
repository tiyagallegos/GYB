const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const escortCtrl = require('../../controllers/escorts')

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

//GET /api/todos
router.get('/', escortCtrl.index);
//POST /api/todos
router.post('/:id/escorts', escortCtrl.create);
//Put /api/todo/:id
router.put('/:id/escorts', escortCtrl.updateDone);
//delet /api/todo/:id
router.delete('/:id/escorts', escortCtrl.deleteEscort);
//put /api/todos/:id/edit
router.put('/:id/escorts/edit', escortCtrl.editEscort);




/*---------- Protected Routes ----------*/




module.exports = router;


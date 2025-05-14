const express = require('express');
const router = express.Router();
const {
    getPeople,
    createPeople,
    createPeoplePostman,
    updatePeople,
    deletePeople
} = require('../controllers/people')

router.get('/',getPeople)

router.post('/', createPeople)

router.post('/postman',createPeoplePostman)

router.put('/:id',updatePeople)

router.delete('/:id',deletePeople)

module.exports = router;
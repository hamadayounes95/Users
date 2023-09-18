var express =require('express')
const { AddPerson, getPersons, getPerson, getOnePerson, updatePerson, removePerson } = require('../controllers/AddPerson')
var router =express.Router()
router.get('/one' ,getOnePerson)
router.get('/:id',getPerson)
router.get('/',getPersons)
router.post('/',AddPerson)
router.put('/:id',updatePerson)
router.delete('/:id',removePerson)

module.exports = router;
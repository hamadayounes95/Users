const { getFilms, getFilm, removeFilm, AddFilm, updateFilm } = require('../controllers/AddFilm')

const FilmRouter = require('express').Router()


FilmRouter.get ('/',getFilms)
FilmRouter.get('/:id',getFilm)
FilmRouter.delete('/:id',removeFilm)
FilmRouter.post('/',AddFilm)
FilmRouter.put('/:id', updateFilm)
module.exports=FilmRouter


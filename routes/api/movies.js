const express = require('express');
const router = express.Router();
const { getAllMovies, getMovie, getAllMoviesWithRatings } = require('../../models/movie');

// get all movies

router.route('/')
  .get(getAllMovies, ( req, res) => res.json(res.rows));

// Get single movie
router.route('/:id')
  .get(getMovie, ( req, res) => res.json(res.rows));

// Get movies withrating BONUS

router.route('/ratings')
  .get(getAllMoviesWithRatings, ( req, res) => res.json(res.rows));

module.exports = router;

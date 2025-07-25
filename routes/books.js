const router = require('express').Router();
let Book = require('../models/book');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const genre = req.body.genre;
  const price = Number(req.body.price);
  const image = req.body.image;

  const newBook = new Book({ title, author, genre, price, image });

  newBook.save()
    .then(() => res.json('Book added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add more API endpoints as needed

module.exports = router;
const express = require('express');
const app = express();

const { Article } = require('./models');

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/articles/create', (req, res) => {
  res.render('articles/create');
});

app.post('/articles', (req, res) => {
  Article.create({
    title: req.body.title,
    body: req.body.body
  }).then(() => {
    res.send('Article berhasil dibuat');
  });
});

app.get('/articles', (req, res) => {
  Article.findAll()
    .then((articles) => {
      res.render('articles/index', { articles });
    });
});

app.get('/articles/:id', (req, res) => {
  Article.findOne({ where: { id: req.params.id } })
    .then((article) => {
      res.render('articles/show', { article });
    });
});

app.get('/articles/delete/:id', (req, res) => {
  Article.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send('Article berhasil dihapus');
    });
})

app.get('/articles/update/:id', (req, res) => {
  Article.findOne({ where: { id: req.params.id } })
    .then((article) => {
      res.render('articles/update', { article });
    });
});

app.post('/articles/update/:id', (req, res) => {
  Article.update({
    title: req.body.title,
    body: req.body.body
  },
  { where: { id: req.params.id } }
  )
  .then(() => {
    res.send('Article berhasil diupdate');
  });
});

app.listen(3000);
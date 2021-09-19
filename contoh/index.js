const express = require("express");
const app = express();

const { Article } = require("./models");

app.use(express.json());

app.get("/articles", (req, res) => {
  Article.findAll().then((articles) => {
    res.status(200).json(articles);
  });
});

app.get("/articles/:id", (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id,
    },
  }).then((article) => {
    res.status(200).json(article);
  });
});

app.post("/articles", (req, res) => {
  Article.create({
    title: req.body.title,
    body: req.body.body,
    approved: req.body.approved,
  })
    .then((article) => {
      res.status(201).json(article);
    })
    .catch((err) => {
      res.status(422).json("Can't create article");
    });
});

app.put("/articles/:id", (req, res) => {
  Article.update(
    {
      title: req.body.title,
      body: req.body.body,
      approved: req.body.approved,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((article) => {
      res.status(200).json("Article updated successfully");
    })
    .catch((err) => {
      res.status(422).json("Can't update article");
    });
});

app.delete("/articles/:id", (req, res) => {
  Article.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).json("Article deleted successfully");
    })
    .catch((err) => {
      res.status(422).json("Can’t delete article");
    });
});

app.get("/", (req, res) => {
  res.status(200).json("sukses");
});

app.listen(9000);

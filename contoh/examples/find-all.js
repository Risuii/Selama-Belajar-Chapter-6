const { Article } = require('../models');

Article.findAll().then((article) => {
  console.log(article);
});
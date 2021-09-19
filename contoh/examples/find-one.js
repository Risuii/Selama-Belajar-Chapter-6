const { Article } = require('../models');

const query = {
  where: { id: 1 }
}

Article.findOne(query).then((article) => {
  console.log(article);
});
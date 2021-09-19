const { Article } = require("./models");

Article.findOne({
  where: { id: 1 },
}).then((article) => console.log(article));

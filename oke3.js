const { Article } = require("./models");

Article.destroy({
  where: {
    approved: false,
  },
}).then(() => console.log("Artikel yang belum di approved sudah dihapus"));

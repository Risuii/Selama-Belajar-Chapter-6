const { Article } = require('../models');

const query = {
  where: { approved: false }
}

Article.destroy(query).then(() => {
  console.log('Artikel yang belum di-approve sudah dihapus');
});
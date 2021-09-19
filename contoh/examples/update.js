const { Article } = require('../models');

const query = {
  where: { id: 1 }
}

Article.update({
  approved: false
}, query)
  .then(() => {
    console.log('Artikel berhasil diupdate');
  })
  .catch(() => {
    console.error('Gagal mengupdate artikel');
  });
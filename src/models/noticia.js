const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  titulo: String,
  corpo: String,
  autor: String,
  dataCriacao: { type: Date, default: Date.now },
});

const Noticia = mongoose.model('Noticia', noticiaSchema);

module.exports = Noticia;

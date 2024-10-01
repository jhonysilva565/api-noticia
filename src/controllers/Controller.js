const Noticia = require('../models/noticia');

const getNoticias = async (req, res) => {
  const noticias = await Noticia.find();
  res.json(noticias);
};

const getNoticia = async (req, res) => {
  const noticia = await Noticia.findById(req.params.id);
  res.json(noticia);
};

const createNoticia = async (req, res) => {
  const novaNoticia = new Noticia(req.body);
  await novaNoticia.save();
  res.status(201).json(novaNoticia);
};

const updateNoticia = async (req, res) => {
  const noticiaAtualizada = await Noticia.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(noticiaAtualizada);
};

const deleteNoticia = async (req, res) => {
  await Noticia.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

module.exports = {
  getNoticias,
  getNoticia,
  createNoticia,
  updateNoticia,
  deleteNoticia,
};

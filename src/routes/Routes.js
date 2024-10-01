const express = require('express');
const { getNoticias, getNoticia, createNoticia, updateNoticia, deleteNoticia } = require('../controllers/Controller');

const router = express.Router();

router.get('/', getNoticias);
router.get('/:id', getNoticia);
router.post('/', createNoticia);
router.put('/:id', updateNoticia);
router.delete('/:id', deleteNoticia);

module.exports = router;


/**
 * @swagger
 * /news:
 *   get:
 *     summary: Lista todas as notícias
 *     responses:
 *       200:
 *         description: Sucesso
 */

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Obtém uma notícia específica
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da notícia
 *     responses:
 *       200:
 *         description: Sucesso
 */

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Cria uma nova notícia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               corpo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     summary: Atualiza uma notícia existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da notícia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               corpo:
 *                 type: string
 *               autor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 */

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Deleta uma notícia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da notícia
 *     responses:
 *       204:
 *         description: Deletado com sucesso
 */

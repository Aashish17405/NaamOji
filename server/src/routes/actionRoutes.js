const { getAllNaamOjis, receiveNaamOji } = require('../controllers/controller');
const express = require('express');
const router = express.Router();

router.get('/', getAllNaamOjis);
router.post('/receive-naamoji', receiveNaamOji);

module.exports = router;
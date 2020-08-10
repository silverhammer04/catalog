const express = require('express');
const router = express.Router();
const {
    readCatalog
} = require('../../data/dal')

router.get('/', async function(req, res) {
    const data = await readCatalog();
        res.send(data);
});

module.exports = router;
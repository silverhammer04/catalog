const express = require('express');
const router = express.Router();
const {
    createTerms,
    readCatalog
} = require('../../data/dal')

router.get('/', async function(req, res) {
    const data = await readCatalog();
        res.send(data);
});

router.post('/', async function(req, res) {
    const body = req.body;
    const data = await createTerms(body);
        res.send(data);
});

module.exports = router;
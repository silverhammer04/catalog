const express = require('express');
const router = express.Router();
const {
    createTerms,
    readCatalog,
    upcertTerms,
    deleteTerms
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

router.put('/:id', async function(req, res )  {
    const body = req.body;
    const id = req.params.id;
    const data = await upcertTerms(id, body);
        res.send(data);
    ;
});

router.delete('/:id', async function(req, res) {
    const data = await deleteTerms(req.params.id); 
        res.send(data)
    });
module.exports = router;
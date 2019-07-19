const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/about', (req, res) => {
    res.render('about.html');
})

module.exports = router;
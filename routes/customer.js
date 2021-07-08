const path = require('path');
const express = require('express');

// root directory of the project
const rootDir = require('../util/path');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'customers.html'));
});

module.exports = router;
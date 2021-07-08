const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const homeRouter = express.Router();


homeRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = homeRouter;
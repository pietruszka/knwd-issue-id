const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const DB = require('./data/db');
const ProjectRoutes = require('./routes/project');

class Application {
    constructor() {
        this.app = express();
        this.app.use(express.static(path.join(__dirname, '../build/')));
        this.app.get('*', function (req, res) {
            res.sendfile(path.join(__dirname, '../build/index.html'));
        });

        this.app.listen(3000, () => console.log('Server is running on port:', 3000));
        this.middleware();
        this.endpoints();
    }

    middleware() {
        this.app.use(bodyParser.json());
    }

    endpoints() {
        this.app.use(new ProjectRoutes().getRouter());
    }
}

module.exports = Application;
const express = require('express');
const {Router} = express;
const DBConnection = require('./../data/db');
const Project = DBConnection.getConnection().model('Project');

class ProjectRoutes {
    constructor() {
        this.router = Router();
        this.router.patch('/api/project/:projectId', async (req, res) => {
            try {
                let foundProject = await Project.findByIdAndUpdate(req.params.projectId, {
                    $inc: {
                        issueNumber: 1
                    }
                }, {
                    new: true
                });
                if(foundProject) {
                    res.status(200).json({
                        result: foundProject
                    });
                } else {
                    res.status(404).json({
                        message: "Project not found"
                    });
                }
            } catch (e) {
                res.status(404).json({
                    message: "Project not found" + ", wrond id"
                });
            }
        });
    }

    getRouter() {
        return this.router;
    }
}

module.exports = ProjectRoutes;
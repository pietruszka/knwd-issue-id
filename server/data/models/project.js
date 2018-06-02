const mongoose = require("mongoose");

class ProjectModel {
    constructor(connection) {
        this.model = connection.model("Project", this._projectModel(), "Project");
    }
    getModel() {
        return this.model;
    }

    _projectModel() {
        return new mongoose.Schema({
            issueNumber: Number,
        });
    }
}

module.exports = ProjectModel;
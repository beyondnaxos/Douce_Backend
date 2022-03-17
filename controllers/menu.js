const db = require('./../models')
// const makeup = require('./../models/makeup')


exports.epilation = (req, res) => {

    db.epilation.findAll({ raw: true })
        .then(epilationData => {
            console.log(epilationData);
            res.send(epilationData);
        })
        .catch(err => {
            console.log(err);
        }
        )

}
exports.makeup = (req, res) => {

    db.makeup.findAll({ raw: true })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        }
        )

}
exports.mgs = (req, res) => {

    db.mgs.findAll({ raw: true })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        }
        )

}
exports.visage = (req, res) => {

    db.visage.findAll({ raw: true })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        }
        )

}
exports.mains = (req, res) => {

    db.main.findAll({ raw: true })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        }
        )

}
exports.pieds = (req, res) => {

    db.pieds.findAll({ raw: true })
        .then(epilationData => {
            console.log(epilationData);
            res.send(epilationData);
        })
        .catch(err => {
            console.log(err);
        }
        )

}


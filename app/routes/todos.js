var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    description: String
});

var model = mongoose.model('Todo', todoSchema);

module.exports = function (app) {

    app.get('/todos', function (req, res) {
        model.find(function (err, data) {
            res.send(data);
        });
    });
    app.post('/todos', function (req, res) {
        model.create({
            description: req.body.description
        }, function () {
            res.sendStatus(200);
        })
    });
    app.put('/todos/:id', function (req, res) {
        model.findByIdAndUpdate(req.params.id, {
            description: req.body.description
        }, function () {
            res.sendStatus(200);
        })
    });
    app.delete('/todos/:id', function (req, res) {
        model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    });

}

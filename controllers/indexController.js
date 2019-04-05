const todo = require('../database/models/todo');

function hello(req, res) {
    res.json({
        "data": {

        },
        "message": "Hello, world!"
    });
}

function get(req, res) {
    todo.findAll()
        .then(todos => {
            res.json({
                "data": todos,
                "message": "Succes"
            });
        });
}

module.exports = {
    get,
    hello
}
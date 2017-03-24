var express = require('express');
var bodyParser = require('body-parser');

var { ObjectID } = require('mongodb');
var { mongoose } = require('./db/mongoose');
var { User } = require('./models/user');
var { Todo } = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }).catch(e => res.status(400).send(e));
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Invalid user id');
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send('Id not found')
    }

    return res.status(200).send(todo);
  }).catch(e => res.status(400).send(e));
});

app.listen(3300, () => {
  console.log('Started on port 3000');
});

module.exports = { app };
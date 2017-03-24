const { ObjectID } = require('mongodb');

var { mongoose } = require('../server/db/mongoose');
var { Todo } = require('../server/models/todo');
var { User } = require('../server/models/user');

Todo.findByIdAndRemove('58d53f67b450261a98c9af04').then((todo) => {
  console.log(todo);
}, (err) => {
  console.log('Could not find todo');
});
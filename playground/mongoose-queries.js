const { ObjectID } = require('mongodb');

var { mongoose } = require('../server/db/mongoose');
var { Todo } = require('../server/models/todo');
var { User } = require('../server/models/user');

/*var id = '58d1534bd735f21d9010cbb0';
if (!ObjectID.isValid) {
  console.log('Id not valid');
}

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }

  console.log(todo);
}).catch((e) => console.log(e));*/

var id = '58d146057ad36c18a4cb00de';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not find');
  }

  console.log(user);
}).catch(e => console.log(e));
require('./config/config.js');

var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');

const {Task} = require('./models/task.js');

const port = process.env.PORT;

var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // console.log("Test lodash : ",_.partition([1, 2, 3, 4], n => n % 2))
})

///POST

///add new task
app.post('/activity', (req, res) => {
  var body = _.pick(req.body, ['text', 'children', 'parent', 'posX', 'posY', 'sub']);


  const task = new Task(body);
  task.save().then((task) => {
    console.log("new task : ",task);
    res.send(task);
  }).catch((e) => {
    res.status(400).send(e);
  })
})

app.patch('/activity/:id', (req, res) => {
  console.log("Edit activity !");
  var id = req.params.id;
  var body = _.pick(req.body, ['completed', 'posX', 'posY', 'text', 'sub'])
  console.log("params id : ",id);
  console.log("body : ",body);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Task.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
})

app.post('/users', (req, res) => {

})

app.delete('/activity/:id', (req, res) => {
  const id = req.params.id;
  console.log("Remove task with id : ",id);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Task.findByIdAndRemove(id).then((task) => {
    if (!task) {
      return res.status(400).send();
    }

    res.send(task);
  }).catch((e) => {
    res.status(400).send();
  })
})

app.get('/', (req, res) => {
  res.send({message:'bad reqest babe'})
})

app.get('/activity', (req, res) => {
  Task.find({})
  .then(todos => {
    let tmpOb = {};

    const result = _.fromPairs(_.map(todos, i => [i._id, i]));
    res.send(result);
  }).catch(() => {
    res.send({error:'something went wrong'})
  })

  // console.log("kurwa ciekawe : ")
})

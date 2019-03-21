var express = require('express');
var router = express.Router();

let users = require('./../services/user-services')

/* GET users listing. */
router.get('/:num', function(req, res, next) {
  const num = req.params.num;
  res.json(users.generateUser(parseInt(num)));
});

router.get('/check/:name', function(req, res, next){
  const name = req.params.name
  res.send(users.checkLengthFor7(name))
});

// Adding new feature
router.get('/newfeature', function(req, res, next){
  console.log("In new feature")
  res.send(users.newFeature())
});

module.exports = router;

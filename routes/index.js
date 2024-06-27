var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Color Changing Hello World' });
});

router.get('/node-test', function (req, res, next) {
  res
    .status(201)
    .json({
      resource: 'node',
      users: 1005,
      shape: 'rectangle'
    })
})
module.exports = router;

var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Post New Message', });
});

router.post('/new', function(req, res, next) {
  let messageText = req.body.messageText;
  let messageUser = req.body.messageUser;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Message = require('../../models/message');

router.get('/', (req, res) => {
  var query = req.query;
    Message.find(query)
        .sort({ dateCreated: -1 })
        .then(messages => res.json(messages))
        .catch(err => res.status(404).json({ nomessagesfound: 'No messages found' }));
});

router.patch('/:id')


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newMessage = new Message({
        about: req.body.about,
        content: req.body.content,
        author: req.body.author,
        classID: req.body.classID
      });
  
      newMessage.save().then(message => res.json(message));
    }
  );

  module.exports = router;
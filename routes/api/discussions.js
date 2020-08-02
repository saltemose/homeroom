const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Discussion = require('../../models/discussion');

router.get('/', (req, res) => {
  var query = req.query;
    Discussion.find(query)
        .sort({ })
        .then(discussion => res.json(discussion))
        .catch(err => res.status(404).json({ nomessagesfound: 'No messages found' }));
});


router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newDiscussion = new Discussion({
        content: req.body.content,
        author: req.body.author,
        messageID: req.body.messageID
      });
  
      newDiscussion.save().then(discussion => res.json(discussion));
    }
  );

  module.exports = router;
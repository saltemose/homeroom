const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const DirectMessage = require('../../models/DirectMessage');

router.get('/', (req, res) => {
    var query = req.query;
      DirectMessage.find(query)
          .then(directmessages => res.json(directmessages))
          .catch(err => res.status(404).json({ nomessagesfound: 'No messages found' }));
  });




router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newDM = new DirectMessage({
        participantA: req.body.participantA,
        participantB: req.body.participantB,
        content: req.body.content,
        author: req.body.author
      });
  
      newDM.save().then(dm => res.json(dm));
    }
  );

  module.exports = router;
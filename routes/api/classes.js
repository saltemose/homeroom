const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Class = require('../../models/class');

router.get('/', (req, res) => {
    var query = req.query;
      Class.find(query)
          .then(classes => res.json(classes))
          .catch(err => res.status(404).json({ nomessagesfound: 'No messages found' }));
  });




router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
  
      const newClass = new Class({
        name: req.body.name,
        users: req.body.users
      });
  
      newClass.save().then(classes => res.json(classes));
    }
  );

  module.exports = router;
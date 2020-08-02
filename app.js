const mongoose = require('mongoose');
const express = require("express");
const passport = require('passport');
var User = require('./models/User');
const app = express();
app.use(passport.initialize());
require('./config/passport')(passport);
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const path = require('path');

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const messages = require("./routes/api/messages");
const discussions = require("./routes/api/discussions");
const classes = require("./routes/api/classes");
const directmessages = require("./routes/api/directmessages")

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use("/api/users", users);
  app.use("/api/messages", messages)
  app.use("/api/discussions", discussions)
  app.use("/api/classes", classes)
  app.use("/api/directmessages", directmessages)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
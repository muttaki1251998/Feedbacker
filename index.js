const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,   })   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);


//Sendgrid Api key:
// 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

require('dotenv').config();
const app = require('express')();
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const discordStrategy = require('./strategies/discordStrategy');
const database = require('./database/database');

const port = process.env.PORT || 4000;

const corsOptions = {
  origin: 'https://discord-oauth2-client.herokuapp.com',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Credentials',
  ],
};

app.use(cors(corsOptions));

app.enable('trust proxy');

database.then(() => {
  console.log('Mongoose connected.');
});

app.use(session({
  saveUninitialized: false,
  secret: 'some random secret',
  name: 'discord.oauth2',
  cookie: {
    maxAge: 60000 * 60 * 24,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoute);
app.use('/api/dashboard', dashboardRoute);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

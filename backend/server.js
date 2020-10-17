require("dotenv").config()
const app = require('express')()
var bodyParser = require('body-parser')
const authRoute = require("./routes/auth")
const dashboardRoute = require("./routes/dashboard")
const session = require("express-session")
const passport = require("passport")
const discordStrategy = require("./strategies/discordStrategy")
var cors = require('cors')
const database = require("./database/database")
let port = process.env.PORT || 4000

var corsOptions = {
  origin: 'https://discord-oauth2-client.herokuapp.com',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept, Credentials']
}

app.use(cors(corsOptions))
// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "https://discord-oauth2-client.herokuapp.com");
//   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Credentials");
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   next();
// }); this works but we are going to make it prettier

app.enable("trust proxy"); // allows passport to use https

database.then(() => {
  console.log("Mongoose connected");
});

app.use(session({
  saveUninitialized: false,
  secret: "some random secret",
  name: "discord.oauth2",
  cookie: {
    maxAge: 60000*60*24
  }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute)
app.use("/api/dashboard", dashboardRoute)

app.listen(port, function() {
  console.log(`listening on port: ${port}`);
});

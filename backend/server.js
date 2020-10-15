require("dotenv").config()
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
var bodyParser = require('body-parser')
const authRoute = require("./routes/auth")
const dashboardRoute = require("./routes/dashboard")
const session = require("express-session")
const passport = require("passport")
const discordStrategy = require("./strategies/discordStrategy")
const database = require("./database/database")

database.then(() => {
  console.log("Mongoose connected");
});

app.use(session({
  saveUninitialized: false,
  secret: "some random secret",
  cookie: {
    maxAge: 60000*60*24
  },
  name: "discord.oauth2"
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute)
app.use("/dashboard", dashboardRoute)

app.listen(4000, function() {
  console.log('listening on localhost:4000');
});

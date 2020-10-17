require("dotenv").config()
const app = require('express')()
var bodyParser = require('body-parser')
const authRoute = require("./routes/auth")
const dashboardRoute = require("./routes/dashboard")
const session = require("express-session")
const passport = require("passport")
const discordStrategy = require("./strategies/discordStrategy")
const database = require("./database/database")
let port = process.env.PORT || 4000

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

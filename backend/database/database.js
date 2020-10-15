const mongoose = require("mongoose")
const connectionuri = process.env.DATABASE_URI

module.exports = mongoose.connect(connectionuri, {
    useNewUrlParser: true,  
    useUnifiedTopology: true 
})
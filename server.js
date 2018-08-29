const express = require("express")
const serveStatic = require("serve-static")
const path = require("path")
const app = express()

//create middleware to handle serving of the app
app.use("/", serveStatic(path.join(__dirname, "/public")))
app.get("*", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})
//create default port to serve the app
const port = process.env.PORT || 5000
app.listen(port)

console.log("magic happens on " + port)

import * as functions from 'firebase-functions'
import * as express from 'express'

const app = express()

// Retrieve passed as query params.
app.get("/page", (req, res) => {
  const query = req.query
  let state = query.state
  if (state) {
    console.log("Requesting state", state)
  }
  res.send("This is the page")
})
// Retrieve values passed as path components.
app.get("/page/:pageId", (req, res) => {
  res.send("Page for " + req.params.pageId)
})
app.get("/", (req, res) => {
  res.send("This is home")
})

exports.app = functions.https.onRequest(app)
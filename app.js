const express = require('express')
const app = express()
const http = require('http')
const https = require('https')

const router = require('./')
const mongooseConnect = require('./helpers/database')

app.use('/', router)
mongooseConnect.dbConnect()



var httpsOptions = {
  key: fs.readFileSync('benchpoint.key'),
  cert: fs.readFileSync('benchpoint.crt')
}

const sslServer = https.createServer(httpsOptions, app).listen(443, () => {
  console.log('https server running at ' + 443)
})
 const server = http.createServer(app).listen(80, () => {
   console.log('http server running at ' + 80)
 })

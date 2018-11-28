const express = require('express')
const app = express()

const fs = require('fs')
const http = require('http')
//const https = require('https')

//const httpsOptions = {
//  key: fs.readFileSync('your_ssl_key_file.key'),
//  cert: fs.readFileSync('your_ssl_crt_file.crt')
//}


//const sslServer = https.createServer(httpsOptions, app).listen(443, () => {
//  console.log('https server running at ' + 443)
//})
 const server = http.createServer(app).listen(80, () => {
   console.log('http server running at ' + 80)
 })

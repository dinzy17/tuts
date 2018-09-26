const express = require('express');
const app = express();
const router = require('./')
const mongooseConnect = require('./helpers/database')

app.use('/', router)

mongooseConnect.dbConnect()


var server = app.listen(3000, function () {
   console.log("Example app listening at http://localhost:3000")
})

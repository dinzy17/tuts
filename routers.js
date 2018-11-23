var express = require('express')
var router = express.Router()
// Using Node.js `require()`
const mongoose = require('mongoose');

router.get("/",	function(req,res){
	res.send("Hello World")
})

module.exports = router

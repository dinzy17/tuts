var express = require('express')
var router = express.Router()
// Using Node.js `require()`
const mongoose = require('mongoose');

router.get("/dddd",	function(req,res){
	res.send("Kiran weds omkar")
})

router.use("/",	function(req,res){
	res.send("asdhnbashdbhasbdjasbd askdhasbdkabsdbahsbdhb")
})


module.exports = router
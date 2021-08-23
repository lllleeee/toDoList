var express = require('express')
var path = require('path')
var router=require('./router')
var bodyParser=require('body-parser')
var app = express()
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname,'./node_modules/')))
app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(5000,function(){
    console.log('running...')
})
module.exports=app
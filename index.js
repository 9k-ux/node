var express = require('express');
var app = express();
const axios = require('axios')

var sta;
var  sta1;


// import fetch from 'node-fetch';
// app.use( express.static( "public" ) );





var new1 = " ";
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyparser = require("body-parser");

// var item = [];

// var item = "";

// const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
// app.use(express.static('public'));

app.get("/",function(req,res){
    function makeGetRequest(path) {
        axios.get(path).then(
            (response) => {
                var result = response.data;
                console.log(result);
                res.render('home',{result:result});
                
            },
            (error) => {
                console.log(error);
            }
        );
    }
    makeGetRequest('http://blynk-cloud.com/8GLG9EbFGg-p_KdYVeCB7asgrDAuARGX/get/V7');
    console.log("helloo dear");
   
  });
  app.listen(process.env.PORT ||3000,function(){
    console.log('server is running on port 3000');
});


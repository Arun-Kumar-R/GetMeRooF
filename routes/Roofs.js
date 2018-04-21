const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Bring in Roof Model
let Roof = require('../models/Roof');

//db set
const db = "mongodb://localhost:27017/RoofDB";
mongoose.Promise = global.Promise;
mongoose.connect(db,function(err){
    if(err){
        console.log("Error!" + err);
    }
});

// Register route
router.post('/register', function(req, res,next){
    
    let newRoof = new Roof({
      Distance:req.body.Distance,
       Rate:req.body.Rate,
        ProjectSize:req.body.ProjectSize,
         DateOfComplition:req.body.DateOfComplition,
    });
Roof.addRoof(newRoof,(err,Roof)=>{
if(err){
  res.json({success:false ,msg:'failed to register Roof'});
}else{
    res.json({success:true ,msg:' registered Roof'});
}
});
});

//sort angular mat
router.get('/sort',function(req, res){
    console.log('Get request for all  Sorted RoofS ');
    Roof.find({})
    .exec(function(err,roofs){
        if(err){
            console.log("error retriving roofs");
        }else{
            res.json(roofs);
         }
    });
});

/*
//Show Data from mongodb (project route)
router.get('/projects',function(req, res){
    console.log('Get request for all RoofS');
    Roof.find({})
    .exec(function(err,roofs){
        if(err){
            console.log("error retriving roofs");
        }else{
            res.json(roofs);
         }
    });
});
*/

module.exports = router;






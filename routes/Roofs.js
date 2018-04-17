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

//Ascending multi coluumn
//show DistanceSort data from mongodb (distance route) multi
router.get('/distance/asce/all', function(req,res){
    console.log("Get request for all RoofS using sort by distance all");
    Roof.find().sort( { Distance:1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show RateSort data from mongodb (rate route) asce multi
router.get('/rate/asce/all', function(req,res){
    console.log("Get request for all RoofS using sort by rate all");
    Roof.find().sort( { Rate:1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show ProjectSizeSort data from mongodb (size route) asce multi
router.get('/size/asce/all', function(req,res){
    console.log("Get request for all RoofS using sort by size all");
    Roof.find().sort( { ProjectSize :1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show date Sort data from mongodb ( date route) asce multi
router.get('/date/asce/all', function(req,res){
    console.log("Get request for all RoofS using sort by date all");
    Roof.find().sort( { DateOfComplition :1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//descending order multi coloumn
//show DistanceSort data from mongodb (distance route) desc multi
router.get('/distance/desc/all', function(req,res){
    console.log("Get request for all RoofS using sort by distance descending order all");
    Roof.find().sort( { Distance:-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show RateSort data from mongodb (rate route) desc multi
router.get('/rate/desc/all', function(req,res){
    console.log("Get request for all RoofS using sort by rate descending order all");
    Roof.find().sort( { Rate:-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show ProjectSizeSort data from mongodb (size route) desc multi
router.get('/size/desc/all', function(req,res){
    console.log("Get request for all RoofS using sort by size descending order all");
    Roof.find().sort( { ProjectSize :-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show Sort data from mongodb ( date route) desc multi
router.get('/date/desc/all', function(req,res){
    console.log("Get request for all RoofS using sort by date descending order all ");
    Roof.find().sort( { DateOfComplition :-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//ascending single
//show sorted data from mongodb  asce single  (distance)
router.get('/distance/asce/one', function(req,res){
    console.log("Get request for all RoofS using sort by distance ascending order single  ");
    Roof.find({},{ "Distance":1,"_id":0}).sort( { Distance:1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show sorted data from mongodb  asce single  (rate)
router.get('/rate/asce/one', function(req,res){
    console.log("Get request for all RoofS using sort by rate ascending order single  ");
    Roof.find({},{ "Rate":1,"_id":0}).sort( { Rate:1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show sorted data from mongodb  asce single  (size)
router.get('/size/asce/one', function(req,res){
    console.log("Get request for all RoofS using sort by size ascending order single  ");
    Roof.find({},{ "ProjectSize":1,"_id":0}).sort( { ProjectSize:1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show sorted data from mongodb  asce single  (date)
router.get('/date/asce/one', function(req,res){
    console.log("Get request for all RoofS using sort by date ascending order single  ");
    Roof.find({},{ "DateOfComplition":1}).sort( {DateOfComplition:1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});



//descending single
//show sorted data from mongodb  desc single  (distance)
router.get('/distance/desc/one', function(req,res){
    console.log("Get request for all RoofS using sort by distance descending order single  ");
    Roof.find({},{ "Distance":1,"_id":0}).sort( { Distance:-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show sorted data from mongodb  desc single  (rate)
router.get('/rate/desc/one', function(req,res){
    console.log("Get request for all RoofS using sort by rate descending order single  ");
    Roof.find({},{ "Rate":1,"_id":0}).sort( { Rate:-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show sorted data from mongodb  desc single  (size)
router.get('/size/desc/one', function(req,res){
    console.log("Get request for all RoofS using sort by size descending order single  ");
    Roof.find({},{ "ProjectSize":1,"_id":0}).sort( { ProjectSize:-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});

//show sorted data from mongodb  desc single  (date)
router.get('/date/desc/one', function(req,res){
    console.log("Get request for all RoofS using sort by date descending order single  ");
    Roof.find({},{ "DateOfComplition":1}).sort( {DateOfComplition:-1} )
    .exec(function(err,roofs){
        if(err){
            console.log('error retriving roofs');
        }else{
            res.json(roofs);
        }
    });
});


module.exports = router;






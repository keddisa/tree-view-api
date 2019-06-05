var TreeService = require('../services/tree.service.js');

var Tree = require('../models/tree.model.js')

exports.getTree = async function(req, res, next){
  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 20; 

  try{
    var tree = await TreeService.getTree({}, page, limit);
    return res.status(200).json({status: 200, data: tree, message: "Successfully Retrieved Tree"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.createFactory = async function(req, res, next){
  var factory = {
    name: req.body.name,
    lowerRange: req.body.lowerRange,
    upperRange: req.body.upperRange,
    children: req.body.children
  }

  try{
    var createdFactory = await TreeService.createFactory(factory);
    return res.status(201).json({status: 201, data: createdFactory, message: "Successfully created factory"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
  
}


exports.updateFactory = async function(req, res, next){
  if(!req.body._id){
    return res.status(400).json({status: 400, message: "ID must be present."});
  }

  var id = req.body._id;
  console.log(req.body);

  var factory = {
    id,
    name: req.body.name ? req.body.name : null,
    lowerRange: req.body.lowerRange ? req.body.lowerRange : null,
    upperRange: req.body.upperRange ? req.body.upperRange : null,
    children: req.body.children ? req.body.children : null
  }

  try{
    var updatedFactory = await TreeService.updateFactory(factory);
    return res.status(200).json({status: 200, data: updatedFactory, message: "Successfully updated factory"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.removeFactory = async function(req, res, next){
  var id = req.params.id;

  try{
    var deleted = await TreeService.deleteFactory(id);
    return res.status(204).json({status: 204, message: "Successfully removed factory"});
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}
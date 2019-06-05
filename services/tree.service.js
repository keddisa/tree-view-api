var Tree = require('../models/tree.model.js')

exports.getTree = async function(query, page, limit){
  var options = {
    page,
    limit
  }
  try {
    var tree = await Tree.paginate(query, options);
    return tree;
  } catch(e){
    throw Error('Many apologies, tree cannot be retrieved at this time')
  }
}

exports.createFactory = async function(factory){
  
  var newFactory = new Tree({
    name: factory.name,
    lowerRange: factory.lowerRange,
    upperRange: factory.upperRange,
    children: factory.children
  });

  try {
    var savedFactory = await newFactory.save();
    return savedFactory;
  } catch(e){
    throw Error("Could not create factory, sorry!")
  }
}

exports.updateFactory = async function(factory){
  var id = factory.id
  try {
    var oldFactory = await Tree.findById(id);
  } catch(e){
    throw Error("Sorry, we were unable to find that factory");
  }

  if(!oldFactory){
    return false;
  }

  oldFactory.name = factory.name;
  oldFactory.lowerRange = factory.lowerRange;
  oldFactory.upperRange = factory.upperRange;
  oldFactory.children = factory.children;

  try{
    var savedFactory = await oldFactory.save();
    return savedFactory;
  }catch(e){
    throw Error("Factory could not be updated");
  }
}

exports.deleteFactory = async function(id){
  try{
    console.log(id)
    var deleted = await Tree.deleteOne({_id: id});
    if(deleted.n === 0){
      throw Error("Factory could not be deleted")
    }
    return deleted
  } catch(e){
    throw Error("Error occurred while deleting factory")
  }
}
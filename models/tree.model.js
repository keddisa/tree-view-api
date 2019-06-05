const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const TreeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    lowerRange: {
      type: Number,
      required: true
    },
    upperRange: {
      type: Number,
      required: true
    },
    children: {
      type: Array,
      required: false
    }
});

TreeSchema.plugin(mongoosePaginate)
const Tree = mongoose.model('Tree', TreeSchema)

module.exports = Tree;
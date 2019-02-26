const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    predQty: {
        type: Number,
    },
    prodQty: {
        type: Number
    },
    ordQty: {
        type: Number
    }
})



module.exports = Item = mongoose.model('Item', ItemSchema);

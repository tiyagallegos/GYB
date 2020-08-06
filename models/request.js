const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    title: String,
    createdBy: {type:Schema.Types.ObjectId, ref:"User"},
    ableBodied: Boolean, 
    dangerLevel: String, 
    location: String,
    details: String,
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);


    

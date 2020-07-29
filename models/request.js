const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    title: String, 
    ableBodied: Boolean, 
    dangerLevel: String, 
    location: String,
    details: String,
    createdBy: String,
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);


    

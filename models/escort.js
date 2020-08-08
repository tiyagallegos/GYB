const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const escortSchema = new Schema({
    title: String, 
    createdBy: {type:Schema.Types.ObjectId, ref:"User"},
    ableBodied: String, 
    vehicle: String, 
    walking: String,
    location: String,
    selfDefenseTraining: String,
    availability: String, 
    details: String
}, { timestamps: true });

module.exports = mongoose.model('Escort', escortSchema);


    

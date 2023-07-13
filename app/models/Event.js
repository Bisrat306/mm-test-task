const mongoose = require('mongoose');

//Create Event Schema
const eventSchema = new mongoose.Schema({
    boardId: {type:String},
    eventType: {type:String},
    event: {type:Object},
    payload: {type:Object},
  },{timestamps: true });
  
module.exports = mongoose.model("Event", eventSchema);

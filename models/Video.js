const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    sn:{
        type:String,
	},
    

});

module.exports =
	mongoose.models.Video || mongoose.model('Video', videoSchema);
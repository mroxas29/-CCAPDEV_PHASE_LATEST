const mongoose = require('mongoose');

const npmSchema = new mongoose.Schema({  
    
   npm: String,
      
});

const npm = mongoose.model('npm', npmSchema);

module.exports = npm;
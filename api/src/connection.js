const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ricardo:ricardo@crudcluster.s51cgaj.mongodb.net/SSAYS?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(db => console.log('Connection successfully'));
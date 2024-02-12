const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ricardo:ricardo@crudcluster.s51cgaj.mongodb.net/SSAYS?retryWrites=true&w=majority')
.then(() => {
    console.log('Connection successfully');
}).catch(error => {
    console.error('Error to connection', error);
});

const mongoose = requiere('mongoose');

mongoose.connection('mongodb://localhost:27017/SSAYS',{
    useNewUrlPaerser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(db => console.log('Connection successfully'));
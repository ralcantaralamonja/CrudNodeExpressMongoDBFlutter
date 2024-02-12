const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userShema = new Schema({
    username : String,
    email:String,
    password:String
});

userShema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
}
userShema.methods.validatePassword = (password) => {
    
    return bcrypt.compare(password,this.password);
}

model.exports = model('User',userShema);
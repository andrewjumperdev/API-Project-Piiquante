const { Schema, model} = require('mongoose');
const bcrypt = require('bcrypt')
// const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});


// userSchema.plugin(uniqueValidator);

userSchema.methods.encrypPassword = async password => {
    const salt =  await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema);
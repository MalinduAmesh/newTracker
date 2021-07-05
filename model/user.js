const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'required']
    },
    password: {
        type: String,
        required: [true, 'required']
    }
});

const User = mongoose.model('User',UserSchema);

module.exports = User;
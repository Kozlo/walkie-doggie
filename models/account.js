var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');
// password is handled by passport-local-mongoose
var Account = new Schema({
    username: {
        type: String,
        required: true
    },
    password: String,
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
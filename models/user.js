var mongoose = require("mongoose");
var passportlocalmongoose = require("passport-local-mongoose");
var UserSchema = mongoose.Schema({
    username: String,
    Password: String,
    peso: String,
    sexo: String,
    raca: String,
    idade: String,
    especie: String,
    endereco: String
});

UserSchema.plugin(passportlocalmongoose);
module.exports = mongoose.model("User", UserSchema);
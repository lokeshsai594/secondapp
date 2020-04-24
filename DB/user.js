const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    }
});

module.exports = mongoose.model('name', nameSchema);
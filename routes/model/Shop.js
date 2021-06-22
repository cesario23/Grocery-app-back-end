const mongoose = require ("mongoose");

const shoppingSchema = new mongoose.Schema ({

    grocery:{
        type: String,
    },
    purchased: {
        type: Boolean,
    },
    dateAdded: {
        type: Date,
        default: () => Date.now (),
    },

});

module.exports = mongoose.model ("shop", shoppingSchema );
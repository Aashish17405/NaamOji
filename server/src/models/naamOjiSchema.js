const mongoose = require('mongoose');

const naamOjiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    naamOji: {
        type: String,
        required: true,
    },
})

const NaamOjiModel = mongoose.model('NaamOji', naamOjiSchema);

module.exports = NaamOjiModel
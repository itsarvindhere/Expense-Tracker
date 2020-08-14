const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'PLEASE ADD SOME TEXT']
    },
    amount: {
        type: Number,
        required: [true, 'PLEASE ADD A POSITIVE OR NEGATIVE NUMBER']
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
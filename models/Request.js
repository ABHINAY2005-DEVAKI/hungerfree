const mongoose = require('mongoose');

const requestSchema = mongoose.Schema(
    {
        beneficiary: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        foodItem: { type: String, required: true },
        quantityNeeded: { type: Number, required: true },
        requestStatus: {
            type: String,
            enum: ['pending', 'fulfilled'],
            default: 'pending',
        },
    },
    { timestamps: true }
);

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;

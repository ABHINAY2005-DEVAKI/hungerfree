const Request = require('../models/Request');

const createRequest = async (req, res) => {
    const { foodItem, quantityNeeded } = req.body;

    try {
        const request = await Request.create({
            beneficiary: req.user._id,
            foodItem,
            quantityNeeded,
        });

        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find({ requestStatus: 'pending' }).populate('beneficiary', 'name email');
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createRequest, getAllRequests };

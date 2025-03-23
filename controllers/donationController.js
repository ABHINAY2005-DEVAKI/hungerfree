const Donation = require('../models/Donation');

const createDonation = async (req, res) => {
    const { foodItem, quantity, pickupLocation } = req.body;

    try {
        const donation = await Donation.create({
            donor: req.user._id,
            foodItem,
            quantity,
            pickupLocation,
        });

        res.status(201).json(donation);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllDonations = async (req, res) => {
    try {
        const donations = await Donation.find({ status: 'available' }).populate('donor', 'name email');
        res.json(donations);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createDonation, getAllDonations };

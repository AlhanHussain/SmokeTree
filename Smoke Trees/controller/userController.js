const User = require('../models/User');
const Address = require('../models/Address');

// POST route for form submission
const register =async(req, res) => {
    try {
        const { name, street, city, state, postalCode } = req.body;

        // Create User
        const user = new User({ name });
        await user.save();

        // Create Address
        const address = new Address({
            street,
            city,
            state,
            postalCode,
            user: user._id
        });
        await address.save();

        // Update User with the new address
        user.addresses.push(address._id);
        await user.save();

        res.status(201).json({ message: 'User and address saved successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};



const getAddresses = async (req, res) => {
    try {
        const users = await User.find({}).populate('addresses');

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.json(users); 
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};






module.exports = {register,getAddresses};

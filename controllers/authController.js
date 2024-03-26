const passport = require('../middleware/authMiddleware');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

async function register(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.json({ message: 'User registered successfully', user: user. });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function login(req, res, next) {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) return next(err);
        if (!user) {
            return res.status(401).json({ message: info.message });
        }
        req.login(user, { session: false }, (err) => {
            if (err) return next(err);
            const token = jwt.sign({ sub: user._id }, config.jwtSecret);
            return res.json({ token });
        });
    });
}

module.exports = {
    register,
    login
};

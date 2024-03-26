const crypto = require('crypto');

// Generate a random secret string
const jwtSecret =()=> crypto.randomBytes(32).toString('hex');

console.log(jwtSecret());

module.exports = {
    jwtSecret
};

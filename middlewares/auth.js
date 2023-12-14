const { verifyToken } = require('../services/authService.js');

const auth = async (req, res, next) => {
    try {
 const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
   const returnUser = verifyToken(authorization);
    if (!returnUser) return res.status(401).json({ message: 'Expired or invalid token' });
    req.user = returnUser;
    next();
    } catch (err) {
        res.status(err.status).json({ message: err.message });
    }
};

module.exports = {
auth,
};

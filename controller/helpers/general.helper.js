// encryp *******************
import CryptoJS from 'crypto-js';
import config from 'config';
import jwt from 'jsonwebtoken';

const encryptPassword = (password) => {
    let secretKey = config.get('secretKeys.cryptojs');
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}

const decryptPassword = (encrypted) => {
    const bytes = CryptoJS.AES.decrypt(encrypted, config.get('secretKeys.cryptojs'));
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

const generateToken = (user) => {
    const secretKey = config.get('secretKeys.jwt');

    const token = jwt.sign({
        data: {
            username: user.username,
            id: user._id
        }
    }, secretKey, { expiresIn: '1h' });

    return token;
}

export default { encryptPassword, decryptPassword, generateToken };
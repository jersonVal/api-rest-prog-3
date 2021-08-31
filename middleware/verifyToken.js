import jwt from 'jsonwebtoken';
import config from 'config';

const verify = (req, res, next)=>{
    const tk = req.headers['access-token'];

    if(tk){
        const secretKey = config.get('secretKeys.jwt');
        const  tkDecoded = jwt.verify(tk, secretKey);
        const currentDate = Math.floor(Date.now() / 1000)

        if(tkDecoded.exp >= currentDate){
            next();
        }else{
            return res.status(400).json({
                message: 'This token expired'
            })
        }
    }else{
        return res.status(400).json({
            message: 'Not token set'
        })
    }

    
}

export default verify;
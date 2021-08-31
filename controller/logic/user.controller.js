import userDto from '../../model/dto/user.dto.js';
import config from 'config';
import helper from '../helpers/general.helper.js';


const login = (req, res, next) => {

    userDto.login({ username: req.body.username }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }


        if (data.length > 0) {

            const password = helper.decryptPassword(data[0].password)

            console.log(password);

            if (req.body.password === password) {
                const tk = helper.generateToken(data[0]);
                return res.status(200).json({
                    token: tk
                })

            } else {
                return res.status(400).json({
                    info: 'Username or Password invalid!'
                })
            }

            

        }

    })
}

const getAllUser = (req, res, next) => {
    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        res.status(200).json({
            info: data
        })

    })
}


export default { login, getAllUser }
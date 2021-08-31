import studentDto from '../../model/dto/student.dto.js';
import userDto from '../../model/dto/user.dto.js';
import config from 'config';

import helper from '../helpers/general.helper.js';
import notiHelper from '../helpers/notificacion.helper.js'

const createStudent = (req, res, next) => {
    let student = {
        code: req.body.code,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career
    };

    studentDto.create(student, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        let r = config.get('roles').student;

        let user = {
            name: student.name,
            lastname: student.lastname,
            username: student.code,
            password: helper.encryptPassword(req.body.password),
            role: r
        }

        userDto.create(user, (err, u) => {
            if (err) {
                studentDto.delete({ _id: data._id }, (err, data) => {
                    console.log('deleting student')
                })
                return res.status(400).json({
                    error: err
                })
            }

            notiHelper.sendSMS(student.phone);

            res.status(201).json({
                info: data
            })
        })
    })
};

const updateStudent = (req, res, next) => {
    let student = {
        code: req.body.code,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career
    };
    studentDto.update({ _id: req.body.id }, student, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        let r = config.get('roles').student;

        let user = {
            name: student.name,
            lastname: student.lastname,
            username: student.code,
            password: helper.encryptPassword(req.body.password),
            role: r
        }

        userDto.update({idUser: req.body.oldUser}, user, (err, data)=>{
            if(err){
                return res.status(400).json({
                    error: err
                })
            }

        })

        res.status(201).json({
            info: data
        })

    })
}

const getAllStudent = (req, res, next) => {
    studentDto.getAll({}, (err, data) => {
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

const getByCodeStudent = (req, res, next) => {
    studentDto.getByCode({ code: req.params.code }, (err, data) => {
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

const deleteStudent = (req, res, next) => {
    studentDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        userDto.delete({idUSer: req.body.idUSer}, (err, data)=>{
            if(err){
                return res.status(400).json({
                    error: err
                })
            }
        })

        res.status(204).json();

    })
}

export default { createStudent, updateStudent, getAllStudent, getByCodeStudent, deleteStudent };
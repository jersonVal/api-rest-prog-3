import teacherDto from '../../model/dto/teacher.dto.js';
import notiHelper from '../helpers/notificacion.helper.js'
import userDto from '../../model/dto/user.dto.js';
import config from 'config';
import helper from '../helpers/general.helper.js';


const createTeacher = (req, res, next) => {
    let teacher = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        office: req.body.office,
        department: req.body.department
    };

    teacherDto.create(teacher, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        let r = config.get('roles').teacher;

        let user = {
            name: teacher.name,
            lastname: teacher.lastname,
            username: teacher.document,
            password: helper.encryptPassword(req.body.password),
            role: r
        }

        userDto.create(user, (err, u) => {
            if (err) {
                return res.status(400).json({
                    error: err
                })
            }

            notiHelper.sendSMS(teacher.phone);

            res.status(201).json({
                info: data
            })
        })

    })
};

const updateTeacher = (req, res, next) => {
    let teacher = {
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        office: req.body.office,
        department: req.body.department
    };

    teacherDto.update({ _id: req.body.id }, teacher, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        res.status(201).json({
            info: data
        })

    })
}

const getAllTeacher= (req, res, next) => {
    teacherDto.getAll({}, (err, data) => {
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

const getByCodeTeacher = (req, res, next) => {
    teacherDto.getByCode({ code: req.params.document }, (err, data) => {
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

const deleteTeacher = (req, res, next) => {
    teacherDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }

        res.status(204).json();

    })
}

export default {createTeacher, updateTeacher, getAllTeacher, getByCodeTeacher, deleteTeacher}
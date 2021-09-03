/** Dto */
import courseDto from '../../model/dto/course.dto.js';
import config from 'config';


const createCourse = (req, res, next) =>{
    let course = {
        code: req.body.code,
        name: req.body.name
    };
    courseDto.create(course,(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};
const updateCourse = (req, res, next) =>{
    let course = {
        code: req.body.code,
        name: req.body.name
    };
    courseDto.update({_id: req.body.id},course,(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

const getAllCourse = (req, res, next) =>{
    courseDto.getAll({},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );

        }
        res.status(200).json(
            {info: data}
        );
    });
};
const getByCodeCourse = (req, res, next) =>{
    courseDto.getByCode({code: req.params.code},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );

    });
};

const deleteCourse = () => {
    courseDto.delete({_id: req.body.id},(err,data)=>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json(
            {
                info: data
            }
        );
    });
}

export default { createCourse, updateCourse, getAllCourse, getByCodeCourse, deleteCourse };
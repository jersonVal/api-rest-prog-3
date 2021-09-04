/** Dto */
import groupDto from '../../model/dto/group.dto.js';
import config from 'config';


const createGroup = (req, res, next) =>{
    let Group = {
        course_id: req.body.course_id,
        period_id: req.body.course_id,
        teacher_id: req.body.course_id,
        number: req.body.number  
    };
    groupDto.create(Group,(err,data)=>{
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
const updateGroup = (req, res, next) =>{
    let Group = {
        course_id: req.body.course_id,
        period_id: req.body.course_id,
        teacher_id: req.body.course_id,
        number: req.body.number 
    };
    groupDto.update({_id: req.body.id},Group,(err,data)=>{
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

const getAllGroup = (req, res, next) =>{
    groupDto.getAll({},(err,data)=>{
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
const getByCodeGroup = (req, res, next) =>{
    groupDto.getByCode({code: req.params.code},(err,data)=>{
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

const deleteGroup = (req, res, next) => {
    groupDto.delete({_id: req.body.id},(err,data)=>{
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

export default { createGroup, updateGroup, getAllGroup, getByCodeGroup, deleteGroup };
/** Dto */
import config from 'config';
import periodDto from '../../model/dto/period.dto.js'


const createPeriod = (req, res, next) =>{
    let period = {
        year: req.body.year,
        number: req.body.number,
        current: req.body.current
    };
    periodDto.create(period,(err,data)=>{
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
const updatePeriod = (req, res, next) =>{
    let period = {
        year: req.body.year,
        number: req.body.number,
        current: req.body.current
    };
    periodDto.update({_id: req.body.id},period,(err,data)=>{
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

const getAllPeriod = (req, res, next) =>{
    periodDto.getAll({},(err,data)=>{
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


const deletePeriod = (req, res, next) => {
    periodDto.delete({_id: req.body.id},(err,data)=>{
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

export default {deletePeriod, getAllPeriod, updatePeriod, createPeriod}
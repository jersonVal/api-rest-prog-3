import controller from '../controller/logic/period.controller.js'

export default (app) => {

    app.get("/period", (req,res,next)=>{
        controller.getAllPeriod(req,res,next);
    });

    app.post("/period", (req,res,next)=>{
        controller.createPeriod(req,res,next);
    });

    app.put("/period", (req,res,next)=>{
        controller.updatePeriod(req,res,next);
    });

    app.delete("/period", (req,res,next)=>{
        controller.deletePeriod(req,res,next);
    });
}
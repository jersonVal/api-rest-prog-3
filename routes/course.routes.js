import controller from '../controller/logic/course.controller.js'

export default (app) => {

    app.get("/course", (req,res,next)=>{
        controller.getAllCourse(req,res,next);
    });

    app.get("/course/bycode/:code", (req,res,next)=>{
        console.log("getiing course by document");
        controller.getByCodeCourse(req,res,next);
    });

    app.post("/course", (req,res,next)=>{
        controller.createCourse(req,res,next);
    });

    app.put("/course", (req,res,next)=>{
        controller.updateCourse(req,res,next);
    });

    app.delete("/course", (req,res,next)=>{
        controller.deleteCourse(req,res,next);
    });
}
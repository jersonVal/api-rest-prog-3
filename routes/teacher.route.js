import controller from '../controller/logic/teacher.controller.js';

const teacherRoutes = (app) =>{
    app.post('/teacher', (req, res, next)=>{
        controller.createTeacher(req, res, next);
    })
    
    app.get("/teacher/bycode/:code", (req, res, next) => {
        controller.getByCodeTeacher(req, res, next)
    })
    
    app.get("/teacher", (req, res, next) => {
        controller.getAllTeacher(req, res, next)
    })
    
    app.put("/teacher", (req, res, next) => {
        controller.updateTeacher(req, res, next)
    })
    
    app.delete("/teacher", (req, res, next) => {
        controller.deleteTeacher(req, res, next)
    })
}

export default teacherRoutes;
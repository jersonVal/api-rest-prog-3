import controller from '../controller/logic/student.controller.js'

const studentRoutes = (app) =>{
    app.post('/student', (req, res, next)=>{
        controller.createStudent(req, res, next);
    })
    
    app.get("/student/bycode/:code", (req, res, next) => {
        controller.getByCodeStudent(req, res, next)
    })
    
    app.get("/student", (req, res, next) => {
        controller.getAllStudent(req, res, next)
    })
    
    app.put("/student", (req, res, next) => {
        controller.updateStudent(req, res, next)
    })
    
    app.delete("/student", (req, res, next) => {
        controller.deleteStudent(req, res, next)
    })
}

export default studentRoutes;
import controller from '../controller/logic/user.controller.js'

const userRoutes = (app) =>{
    
    app.post("/user", (req, res, next) => {
        controller.login(req, res, next)
    })
    
    app.get("/user", (req, res, next) => {
        controller.getAllUser(req, res, next)
    })
    
}

export default userRoutes;
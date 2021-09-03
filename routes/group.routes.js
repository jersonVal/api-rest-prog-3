import controller from '../controller/logic/group.controller.js'

export default (app) => {

    app.get("/group", (req,res,next)=>{
        controller.getAllGroup(req,res,next);
    });

    app.get("/group/bycode/:code", (req,res,next)=>{
        console.log("getiing group by document");
        controller.getByCodeGroup(req,res,next);
    });

    app.post("/group", (req,res,next)=>{
        controller.createGroup(req,res,next);
    });

    app.put("/group", (req,res,next)=>{
        controller.updateGroup(req,res,next);
    });

    app.delete("/group", (req,res,next)=>{
        controller.deleteGroup(req,res,next);
    });
}
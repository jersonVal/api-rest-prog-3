import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import getIp from './middleware/getIpAddress.js';
import tkFn from './middleware/verifyToken.js';
import db from './model/db-connection/mongodb.js';

// Routes***********
import studentRoutes from './routes/student.route.js'
import teacherRoutes from './routes/teacher.route.js'
import userRoutes from './routes/user.route.js'
import courseRoutes from './routes/course.routes.js'
import groupRoutes from './routes/group.routes.js'
import periodRoutes from './routes/period.routes.js'


db();
const app = express();
const port = config.get('server-port')

const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded({
    extended: true
})

app.use(jsonParser);
app.use(urlEncodeParser);

app.use('*', getIp);

app.get('/', (req, res, next)=>{
    res.send(`<h1>Welcome to academic rest api</h1>`)
})

userRoutes(app);

//token middleware
// app.use(tkFn)

studentRoutes(app);
teacherRoutes(app);
courseRoutes(app);
groupRoutes(app);
periodRoutes(app);



app.listen(port, ()=>{
    console.log('server is running')
})
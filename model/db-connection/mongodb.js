import mongoose from 'mongoose';
import config from 'config';

const mongodbInfo = config.get('db-connections.mongodb');

const connectStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`
//npm install mongoose

export default () => {
    mongoose.connect(connectStr);

    mongoose.connection.on('connected', () => {
        console.log('mongodb server connected!')
    })
    
    mongoose.connection.on('disconnected', () => {
        console.log('mongodb server disconnected!')
    })
    
    mongoose.connection.on('error', () => {
        console.log('mongodb server connection error!')
    })
    
    mongoose.connection.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('mongodb server shutting down!')
        })
    })
}



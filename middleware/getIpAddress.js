const getIp = (req, res, next)=>{
    console.log(`Ip client: ${req.connection.remoteAddress}`);
    next();
}

export default getIp;
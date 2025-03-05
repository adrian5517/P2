const errorMiddleware = (error, req, res, next) => {
    console.log('here is an error', error);
    const statusCode = res.statusCode ?  res.statusCode : 500;
    res.status(statusCode);
    res.status(500).json({ message: error.message , stacc: process.env.NODE_ENV === 'development'? err.stack : null });
}

module.exports = errorMiddleware;
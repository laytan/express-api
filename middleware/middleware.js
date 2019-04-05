function notFound(req, res, next) {
    res.status(404);
    const error = new Error("Did not find endpoint: " + req.originalUrl);
    next(error);
}

function errorHandler(req, res, next, err) {
    console.error("Error encountered!", err.message, err.stack);
    // If no special status has been set, default to 500 
    if (res.statusCode == 200) res.status(500);

    let response = {
        "data": {},
        "message": err.message,

    }
    // Include stack if we are in development
    if (!process.env.ENVIRONMENT == 'production') {
        response.stack = err.stack;
    }

    res.json(response);
}

module.exports = {
    notFound,
    errorHandler
}
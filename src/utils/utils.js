/**
 * Use this for semi redundant logs so the console does not bloat when testing
 * 
 * Does not log when in test environment
 */
logRed = function (msg) {
    if (process.env.ENVIRONMENT == 'test') return;
    console.log(msg);
}

module.exports = {
    logRed
}
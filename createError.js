module.exports = function(message, cause) {
    var error,
        argsLen = arguments.length,
        E = Error;
    
    if (argsLen == 2) {
        error = message instanceof E ? message : new E(message);
        if (error.stack) {
            error.stack += '\nCaused by: ' + (cause.stack || cause);
        }
        else {
            error._cause = cause;    
        }
    }
    else if (argsLen == 1) {
        if (message instanceof E)
        {
            error = message;
        }
        else
        {
            error = new E(message);
        }
    }
    
    return error;
};
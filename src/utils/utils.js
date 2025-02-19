exports.StatusCode = Object.freeze({
    SUCCESS: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
});

exports.UserRole = Object.freeze({
    ADMIN: 'admin',
    INSTRUCTOR: 'instructor',
    STUDENT: 'student'
});

exports.throwError = (message, statusCode)=>{
    const error = new Error();
    error.message = message
    error.statusCode = statusCode;
    throw error
}
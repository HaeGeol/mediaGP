/**
 * Redis Configuration
 */
module.exports = {

    host : '110.10.174.169',
    port : 6379,
    db : 2,

/*
    host : '128.199.70.224',
    port : 6379,
    db : 2,
*/
    /*
    host : '211.189.20.28',
    port : 6379,
    db : 2,*/

    //-------------------------------
    // Redis 서버가 응답이 없을시 에러 처리.
    errorHandler: function(req, res, next) {
        if( "undefined" === typeof req.session) {
            throw new Error(' Lost Redis Server Connection. ');
        }
        next();
    }
}
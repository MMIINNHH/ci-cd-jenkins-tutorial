/**
 * 설명: Node.js -> MySQL 설정
 * 참고: https://docs.microsoft.com/ko-kr/azure/mysql/connect-nodejs
 */ 

var config =
{
    host: '121.166.65.85',
    port: 3306,
    user: 'outside',
    password: '1234',
    database: 'ums',
    multipleStatements: true
};

module.exports = {
    config
}

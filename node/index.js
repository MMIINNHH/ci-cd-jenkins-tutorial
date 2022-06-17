/**
 * index.js
 *
 * 루트 노드 서버
 * 가상 호스트를 이용해 라우팅 처리
 */

// 애플리케이션 생성
const express = require('express');
const vhost = require('vhost');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

/* 화이트 리스트 */
var whitelist = ['http://127.0.0.1:5000', 'http://127.0.0.1:5000']
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}
app.use(cors(corsOptions));

//생성할 앱 목록
const appList = [
    //로컬 실행 서버
    { domain: '127.0.0.1', servername: 'LocalWebApp', path: '/web/', app: require('./www/www.js') },   // Web App 설정    
    { domain: '127.0.0.1', servername: 'LocalWebAPI', path: '/api/', app: require('./api/api.js') },  // Web API 설정

    { domain: '172.30.1.11', servername: 'LocalWebApp', path: '/web/', app: require('./www/www.js') },   // Web App 설정    
    { domain: '172.30.1.11', servername: 'LocalWebAPI', path: '/api/', app: require('./api/api.js') },  // Web API 설정

    { domain: '192.168.219.240', servername: 'LocalWebApp', path: '/web/', app: require('./www/www.js') },   // Web App 설정    
    { domain: '192.168.219.240', servername: 'LocalWebAPI', path: '/api/', app: require('./api/api.js') },  // Web API 설정

    { domain: '49.164.66.95', servername: 'LocalWebApp', path: '/web/', app: require('./www/www.js') },   // Web App 설정    
    { domain: '49.164.66.95', servername: 'LocalWebAPI', path: '/api/', app: require('./api/api.js') },  // Web API 설정

    { domain: 'minhyeong.xyz', servername: 'LocalWebApp', path: '/web/', app: require('./www/www.js') },   // Web App 설정    
    { domain: 'minhyeong.xyz', servername: 'LocalWebAPI', path: '/api/', app: require('./api/api.js') },  // Web API 설정
];

//
appList.forEach((val) => {
    if (val.servername.toLowerCase() == 'localwebapp') {
        app.use(val.path, val.app);
        app.use(vhost(val.domain, val.app));
    } else {
        app.use(val.path, val.app);
        app.use(vhost(val.domain, val.app));
    }
});

//Live라면 인증서 가져와서 서버 구동    
if (process.env.NODE_ENV === 'production') {
    app.listen(process.env.PORT || 5000, () => {
        console.log('운영 모드 http 가상 서버 실행: 5000');
    });
} else {
    app.listen(process.env.PORT || 5000, () => {
        console.log('디버그 모드 http 가상 서버 실행: 5000');
    });
}
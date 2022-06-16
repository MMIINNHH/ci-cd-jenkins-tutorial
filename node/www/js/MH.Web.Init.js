'use strict';

MH.Web.Init = MH.Web.Init || {};
var modiidx = null;
var init = MH.Web.Init;
init = {

    // 유저 로그인 화면 제어
    index: function () {

    },

    test: function () {

    },
};

$(document).ready(function () {
    var url = document.location.href;
    var len = url.split('/').length;
    var pageName = url.split('/')[len - 1];
    pageName = pageName.split('#')[0]
    pageName = pageName.split('?')[0]
    if (pageName == '') {
        init['index']();
    } else {
        init[pageName]();
    }
});
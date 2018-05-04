'use strict';

require('./index.css');
var util    = require('utils/util.js');

// 页面
var page = {
    init : function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        util.ajax({
            url: '/passport/checklogin',
        })
        util.ajax({
            url: '/product/getproductlistall',
        })
    },
    bindEvent : function(){
        var _this = this;
    },
};

$(function(){
    page.init();
})

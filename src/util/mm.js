/*
* @Author: Chencong
* @Date:   2017-10-22 15:13:55
* @Last Modified by:   Chencong
* @Last Modified time: 2017-10-22 17:04:54
*/
var Hogan = require('hogan');
var conf = {
	serverHost: ''
};
var _mm = {
	//request
	request: function(param) {
		//_this == object _mm
		var _this = this;
		$.ajax({
			type 	: param.method || 'get',
			url   	: param.url	   || '',
			dataType: param.type   || 'json',
			data    : param.data   || '',
			success : function(res) {
				//success
				if ( 0 === res.status) {
					typeof param.success === 'function' && param.success(res.data, res.msg);
				} 
				//need log in
				else if (10 === res.status) {
					_this.doLogin();
				}
				//data error
				else if (1 === res.status) {
					typeof param.error === 'function' && param.error(res.msg);
				}
			},
			error   : function(err) {
				typeof param.error === 'function' && param.error(err.statusText);
			}
		});
	},
	//get server url
	getServerUrl: function(path) {
		return conf.serverHost + path;
	},
	//get url param
	getUrlParam: function(name) {
		//mmall.com/product/list?keyword=xxx&page=1
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result? decodeURIComponent(result[2]): null;
	},
	//render html
	renderHtml: function(htmlTemplate, data) {
		var template = Hogan.compile(htmlTemplate),
			result   = template.render(data);
		return result;
	},
	//success msg
	successTips: function(msg) {
		alert(msg || 'success!');
	},
	//success msg
	errorTips: function(msg) {
		alert(msg || 'error!');
	},
	//valid checking
	validate: function(value, type) {
		var value = $.trim(value);
		//non-null
		if ('require' === type) {
			return !!value;
		}
		//phone
		if ('phone' === type) {
			return /^1\d{10}$/.test(value);
		}
		//email
		if ('email' === type) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
		}
	},
	//login
	doLogin: function() {
		window.location.href = './login.html?redirect=' + encodeURIComponent(window.location.href);
	},
	//index
	goHome: function() {
		window.location.href = './index.html';
	}
};

module.exports = _mm;
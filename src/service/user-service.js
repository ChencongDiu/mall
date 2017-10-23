/*
* @Author: x
* @Date:   2017-10-23 11:24:21
* @Last Modified by:   x
* @Last Modified time: 2017-10-23 16:54:04
*/
var _mm = require('util/mm.js');

var _user = {
	//check log in
	checkLogin: function(resolve, reject) {
		_mm.request({
			url 	: _mm.getServerUrl('/user/get_user_info.do'),
			method  : 'POST',
			success : resolve,
			error 	: reject
		});
	},
	//log out
	logout: function(resolve, reject) {
		_mm.request({
			url 	: _mm.getServerUrl('/user/logout.do'),
			method  : 'POST',
			success : resolve,
			error 	: reject
		});
	}
}

module.exports = _user;
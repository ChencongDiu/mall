/*
* @Author: x
* @Date:   2017-10-23 17:05:28
* @Last Modified by:   x
* @Last Modified time: 2017-10-23 17:29:46
*/
require('./index.css');
require('page/common/nav-simple/index.js')
var _mm = require('util/mm.js');

$(function() {
	var type = _mm.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success').show();
		
	$element.show();
})
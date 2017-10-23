/*
* @Author: x
* @Date:   2017-10-23 14:41:31
* @Last Modified by:   x
* @Last Modified time: 2017-10-23 15:20:38
*/
require('./index.css');
var _mm = require('util/mm.js');
//common header
var header = {
	init: function() {
		this.bindEvent();
	},
	onLoad: function() {
		var keyword = _mm.getUrlParam('keyword');
		if (keyword) {
			$('#search-input').val(keyword);
		};
	},
	bindEvent: function() {
		var _this = this;
		//click on search button
		$('#search-btn').click(function() {
			_this.searchSubmit();
		});
		//press 'Enter'
		$('#search-input').keyup(function(e) {
			if (e.keyCode === 13) {
				_this.searchSubmit();
			}
		});
	},
	//search submit
	searchSubmit: function() {
		var keyword = $.trim($('#search-input').val());
		if (keyword) {
			window.location.href = './list.html?keyword=' + keyword;
		}
		else {
			_mm.goHome();
		}
	}
};

header.init();
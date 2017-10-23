/*
* @Author: x
* @Date:   2017-10-22 23:23:43
* @Last Modified by:   x
* @Last Modified time: 2017-10-23 11:43:46
*/
require('./index.css');
var _mm   = require('util/mm.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
//nav
var nav = {
	init: function() {
		this.bindEvent();
		this.loadUserInfo();
		this.loadCartCount();
		return this;
	},
	bindEvent: function() {
		//log in
		$('.js-login').click(function() {
			_mm.doLogin();
		});
		//sign up
		$('.js-register').click(function() {
			window.location.href = './register.html';
		});
		//sign out
		$('.js-logout').click(function() {
			_user.logout(function(res) {
				window.location.reload();
			}, function(errMsg) {
				_mm.errorTips(errMsg);
			});
		});
	},
	//load user info
	loadUserInfo: function() {
		_user.checkLogin(function(res) {
			$('.user.not-login').hide().siblings('.user.login').show()
			.find('.username').text(res.username);
		}, function(errMsg) {
			//nothing
		});
	},
	//load cart #
	loadCartCount: function() {
		_cart.getCartCount(function(res) {
			$('.nav .cart-count').text(res || 0)
		}, function(errMsg) {
			$('.nav .cart-count').text(0)
		});
	}
};

module.exports = nav.init();
/*
* @Author: x
* @Date:   2017-10-23 11:41:34
* @Last Modified by:   x
* @Last Modified time: 2017-10-23 16:52:36
*/
var _mm = require('util/mm.js');

var _cart = {
	//get cart #
	getCartCount: function(resolve, reject) {
		_mm.request({
			url 	: _mm.getServerUrl('/cart/get-cart-product-count.do'),
			success : resolve,
			error 	: reject
		});
	}
}

module.exports = _cart;
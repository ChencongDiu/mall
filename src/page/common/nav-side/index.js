/*
* @Author: x
* @Date:   2017-10-23 15:34:22
* @Last Modified by:   x
* @Last Modified time: 2017-10-23 17:00:30
*/
require('./index.css');
var _mm 			= require('util/mm.js');
var templateIndex   = require('./index.string');
//nav-side
var navSide = {
	option: {
		name: '', 
		navList: [
			{name: 'user-center', desc: 'User Info', href: './user-center.html'},
			{name: 'order-list', desc: 'My Orders', href: './order-list.html'},
			{name: 'pass-update', desc: 'Change Password', href: './pass-update.html'},
			{name: 'about', desc: 'About DaigouLin', href: './about.html'}
		]
	},
	init: function(option) {
		$.extend(this.option, option);
		this.renderNav();
	},
	//render nav-side
	renderNav: function() {
		//option data active
		for (var i = 0, iLength = this.option.navList.length; i < iLength; i++) {
			if (this.option.navList[i].name === this.option.name) {
				this.option.navList[i].isActive = true;
			}
		};
		//render list data
		var navHtml = _mm.renderHtml(templateIndex, {
			navList: this.option.navList
		});
		//html in container
		$('.nav-side').html(navHtml);
	}
};

module.exports = navSide;
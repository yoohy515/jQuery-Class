define(['jquery'], function($) {
	'use strict';
	// AMD 방식

	if (!$.fn.radioClass) {
		$.fn.radioClass = function(name) {
			// this: 제이쿼리 객체
			this.addClass(name);
			var $siblings = this.siblings();// 집합
			$.each($siblings, function(index, item) {// Utility Methods
				var $item = $siblings.eq(index); // $(item);
				if ( $item.hasClass(name) ) {
					$item.removeClass(name);
				}
				// DomScript
				// if (item.classList.contains(name)) {
				// 	item.classList.remove(name);
				// }
			});

			return this;// 체인 방식
		}
	}

	console.log('radioClass');

});

// define(function(require) {
// 	'use strict';
// 	// CommonJS 방식
// 	var $ = require('jquery'); 
// 	var $body = $('body');
// });
define(function() {
	'use strict';
	
	// display: inline 요소를 찾아야..
	// $.each($('div'), function(index, el) {
	// 	return ( $('div').css('display') === 'inline' )
	// });

	// $('div:inline');

	// var getStyle = (function(method) {
	// 	method = method ? 'getComputedStyle' : 'currentStyle';
	// 	if (method === 'getComputedStyle') {
	// 		return function(el, prop) {
	// 			return window.getComputedStyle(el)[prop];
	// 		}
	// 	} else {
	// 		return function(el, prop) {
	// 			return el[method][prop];
	// 		}
	// 	}
	// })(window.getComputedStyle);


	if (!$.expr[':'].inline) {
		$.expr[':'].inline = function(el, index, meta, items) {
			// $.log(el, index, meta, items);	// item jQuery 1.7

			// window.getComputedStyle(el).display; // W3C
			// el.currentStyle.display // MS
			// return getStyle(el, 'display') === 'inline';
			return $(el).css('display') === 'inline';
		}
	}
	if (!$.expr[':'].block) {
		$.expr[':'].block = function(el, index, meta, items) {
			// $.log(el, index, meta, items);	// item jQuery 1.7

			// window.getComputedStyle(el).display; // W3C
			// el.currentStyle.display // MS
			// return getStyle(el, 'display') === 'block';
			return $(el).css('display') === 'block';
		}
	};
	
});
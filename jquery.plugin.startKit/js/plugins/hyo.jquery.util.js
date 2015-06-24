define(['jquery'], function($) {
	'use strict';
	
	if (!$.version) {
		$.version = $().jquery;
	}

	if (!$.ex) {
		$.ex = $.expr[':'];
	}

	if (!$.log) {
		$.log = function(arg) {
			if (window.console) {
				console.log(arg);
			}
		}
	}

	if (!$.$) {
		$.$ = function(DOM_Element) {
			// 삼항식
			// (조건) ? 참() : 거짓()
			// return A || B
			// return $.data(DOM_Element, '@this') || $.data(DOM_Element, '@this', $(DOM_Element));

			if ( !$.data(DOM_Element, '@this') ) {
				$.data(DOM_Element, '@this', $(DOM_Element));
			}
			return $.data(DOM_Element, '@this');
		}
	}
	
});
/**
 * 모듈별 호출 코드
 * --------------------------------
 */
require(['setHeight100vh', 'redify'], function() {
	'use strict';

	// jQuery 플러그인: $('body').setHeight100vh();
	console.log( $.prototype === $.fn, $().jquery );

	// 플러그인 실행 코드
	$('body').setHeight100vh().redify().addClass('body_el');

});





// require(['detectizr', 'jquery'], function(Detectizr, $) {

// 	// requireJS > main.js > modernizr.js > detectizr.js > callback
// 	Detectizr.detect();

// 	// requireJS > main.js > jquery.js > callback
// 	$('body').height('100vh').css({
// 		'background': '#FC414B'
// 	});
// });

// require(['jquery', 'modernizr'], function($, Modernizr) {
// 	console.log($ === window.jQuery, Modernizr);
// });
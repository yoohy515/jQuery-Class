require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'libs/jquery.min',
		'modernizr': 'libs/modernizr.min',
		'detectizr': 'libs/detectizr.min',
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'detectizr': {
			exports: 'Modernizr.Detectizr',
			deps: ['modernizr']
		}
	}
});

require(['jquery'], function($) {
	// jQuery 플로그인: $('body').setHeight100vh();
	// console.log( jQuery.prototype === jQuery.fn );
	if ( !$.fn.setHeight100vh ) {
		$.fn.setHeight100vh = function() {
			this.css('height', '100vh');
			return this;
		}
	}

	if ( !$.fn.redify ) {
		$.fn.redify = function() {
			this.css('background', 'red');
			return this;
		}
	}

	// 플로그인 실행 코드
	$('body').setHeight100vh().redify().addClass('body_el');
});

// require(['detectizr', 'jquery'], function(Detectizr, $) {
// 	// requireJS > main.js > modernizr.js > detectizr.js > callback
// 	Detectizr.detect();
// 	$('body').height('100vh').css({
// 		'background': '#000'
// 	});
// });

// require(['jquery', 'modernizr'], function($, Modernizr) {
// 	console.log($ === window.jQuery, Modernizr);
// });
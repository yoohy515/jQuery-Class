/**
 * --------------------------------
 * requireJS 환경설정(Configuration)
 * --------------------------------
 */
require.config({
	baseUrl: 'js',

	paths: {
		// 라이브러리
		'jquery'    : 'libs/jquery.min',
		'modernizr' : 'libs/modernizr.min',
		'detectizr' : 'libs/detectizr.min',
		// 모듈
		'main'		: 'modules/main',
		'other_main': 'modules/other_main',
		'checkLibs'	: 'modules/checkLibs',
	},

	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'detectizr': {
			exports: 'Modernizr.Detectizr',
			deps: ['modernizr']
		}
	},
	
	deps: [
		'plugins/jquery.radioClass'
		// 'main',
		// 'other_main',
		// 'checkLibs'
	],

	waitSeconds: 15,

	urlArgs: 'hyo=' + (new Date()).getTime()
});
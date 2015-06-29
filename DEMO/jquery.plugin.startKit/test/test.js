require.config({

	baseUrl: '../js',

	paths: {
		'qunit': 'libs/qunit/qunit',
		'jquery': 'libs/jquery.min',
		'hyo.jquery.util': 'plugins/hyo.jquery.util',
		'hyo.jquery.expr': 'plugins/hyo.jquery.expr',
		'hyo.jquery.util.test': '../test/hyo.jquery.util.test',
		'hyo.jquery.expr.test': '../test/hyo.jquery.expr.test'
	},

	shim: {
		'qunit': {
			exports: 'QUnit'
		},
		'jquery': {
			exports: '$'
		},

		'hyo.jquery.util': ['jquery'],
		'hyo.jquery.expr': ['jquery'],

		'hyo.jquery.util.test': {
			deps: [
				'qunit', 
				'hyo.jquery.util']
		},

		'hyo.jquery.expr.test':	[
			'qunit', 
			'hyo.jquery.util',
			'hyo.jquery.expr'
		]
	},

	waitSeconds: 15,

	urlArgs: 'ts:' + (new Date()).getTime()

});

require(['hyo.jquery.expr.test'], function() {
	QUnit.start();
});
require.config({
	baseUrl: 'js',

	paths: {
		'modernizr': 'libs/modernizr.min',
		'detectizr': 'libs/detectizr.min',
		'jquery': 'libs/jquery.min',
		'init': 'modules/init',
		'jquery.utils': 'plugins/jquery.utils'
	},

	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'detectizr': {
			deps: ['modernizr'],
			exports: 'Modernizr.Detectizr'
		}
	},

	waitSeconds: 15,

    urlArgs: "bust=" +  (new Date()).getTime()
});

require(['init']);
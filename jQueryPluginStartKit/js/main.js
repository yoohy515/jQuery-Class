require.config({
	baseUrl: 'js',

	paths: {
		'jquery': 'libs/jquery.min',
		'jquery.utils': 'utils/jquery.utils',
		'jquery.radioClass': 'plugins/jquery.radioClass',
	},

	waitSeconds: 15,

    urlArgs: "bust=" +  (new Date()).getTime()
});

require(['jquery.radioClass'], function() {
	$('#tabNav').radioClass();
});
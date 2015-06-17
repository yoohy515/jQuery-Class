require(['plugins/jquery.radioClass', 'plugins/jquery.redify'], function() {
	'use strict';
	
	$('ul li').on('click', function() {
		$(this).radioClass('selected').redify();
	});
});
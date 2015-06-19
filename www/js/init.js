require(['plugins/jquery.radioClass', 'plugins/jquery.redify'], function() {
	'use strict';
	
	$('ul li').on('click', function() {
		// this: html 요소
		// console.log(this);
		
		// $(this): jquery 개체
		// console.log($(this));	
		
		$(this).radioClass('selected').redify();
	});
});
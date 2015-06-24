/*
 * require.js 환경설정 객체
 * http://requirejs.org/docs/api.html#config
 */
require.config({

    // 기본 위치 지정
    baseUrl: '..',

    // 모듈 단축 경로 지정 또는 이름 별칭(Alias) 지정
    paths: {
        'jquery': 'libs/jquery.min', // "/js/lib" 과 동일하다. baseUrl 기준
        'radioClass': 'src/jquery.radioClass'
    }

});

/*
 * 모듈 호출
 */
require(['jquery', 'radioClass'], function($) {
	'use strict';
	
	(function($){
		var $demo = $('#demo');
		$demo.on('click', 'li > a', function(e) {
			e.preventDefault();
			// $(this).parent().radioClass('clicked');
			$(this).radioClass('clicked', 'li');
		});
	})(window.jQuery);
});
// 환경설정
require.config({
	// 기준 경로 설정
	baseUrl: 'js/',
	// 모듈의 단축 경로 지정 또는 이름 별칭(Alias)을 지정
	paths: {
		jquery: 'libs/jquery-1.11.3.min',
		modernizr: 'libs/modernizr.custom.27956',
		detectizr: 'libs/detectizr.min'
	}
});

// 모듈 호출: jQuery 호출 이후 코드 수행
require(['detectizr', 'modernizr', 'jquery'], function(Detectizr, Modernizr, $) {
	// jQuery를 호출한 이후 수행되는 함수 코드
	console.log(
		'jQuery:' + window.jQuery+'\n',
		'Modernizr:' + window.Modernizr+'\n',
		'Detectizr:' + window.Detectizr
	);
});
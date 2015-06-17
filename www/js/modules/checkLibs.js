/**
 * 모듈 exports 테스트
 * --------------------------------
 */
require(['modernizr', 'detectizr'], function(m, d) {
	console.log('modernizr:',m,'\ndetectizr:',d);
});
// 호이스트(Hoist): 끌어올리다.
// 함수는 내부 영역을 로컬 영역(Scope)
// var, function() {}

// 리터럴(소스 코드의 고정된 값)
// var num = 9,
// 	str = '식혜',
// 	boo = true,
// 	fnc = function() {},
// 	arr = [],
// 	obj = {};

// // 함수 선언식
// function fn() {}

// // 함수 표현식
// var fn = function(){}();

// // 즉시실행 함수
// (function(){})()



// 전역(Global): window
// (function(global){
// 	var i = 0;
// 	for (; i<10; i++) {
// 		console.log(i);	// 0~9 -> i???
// 	}
// 	// i == 10

// 	function double (num) {
// 		return num * num;
// 	}
// 	console.log( double(i) );
// })(window);

// var i = 23;



// (function(global, $){
// 	var $body = $('body'),
// 		num = 20;

// 	// 전역으로 내보냅니다.
// 	global.num = num;

// })(window, window.jQuery);

// (function(global, $){
// 	console.log(num); // ???
// 	var $body = $('html');

// })(window, window.jQuery);



// A
(function(global, $){
	var name = 'demoClass';
	$('.demo').addClass(name);
})(window, window.jQuery);

// B
(function(global, $){
	var name = 'innerClass';
	$('.demo').find('.inner').addClass(name);
})(window, window.jQuery);

// C
(function(global, $){
	var name = 'bodyClass';
	$('body').addClass(name);
})(window, window.jQuery);
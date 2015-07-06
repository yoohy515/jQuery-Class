define(['jquery.utils'], function() {
	// 모듈코드

	var plugin = 'radioClass';

	if ( !$.fn[plugin] ) {

		$.fn[plugin] = function(options) {
			var $this = this;
			var $children = $this.children();

			$.each($children, function(index, value) {
				// console.log(index, value);
				
			});

			return $.each($this, function(index, el) {
				var $el = $.$(el);
				// 플러그인 코드
				// 어떤 코드를 작성할 것인가?
				// 해당 플러그인 어떤 일을 하는가? (기능 정리)
			});

		}

		// 초기화 옵션
		$.fn[plugin].default = {

		};
	};
});
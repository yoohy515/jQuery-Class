[＜ README.md](../README.md)

---

### [TDD] QUnit을 활용한 jQuery 플러그인 개발 테스트

![QUnit 테스트 뷰](../GUIDE/QUnit-test-view.png)

※ `AMD` 키워드가 붙은 파일은 `requireJS`를 활용한 예시

```sh
.
├── libs/
│   ├── jquery.min.js
│   ├── qunit/
│   │   ├── qunit.css
│   │   ├── qunit.js
│   │   └── theme/
│   │       ├── qunit-theme-burce.css
│   │       ├── qunit-theme-gabe.css
│   │       ├── qunit-theme-ninja.css
│   │       └── qunit-theme-nv.css
│   └── require.js # AMD
├── src/
│   ├── amd.jquery.radioClass.js # AMD
│   ├── jquery.radioClass.js
│   └── main.js # AMD
└── test/
    ├── jquery.radioClass.test.js
    ├── test-amd.html # AMD
    ├── test.css
    └── test.html
```

-

#### `jquery.radioClass` 플러그인 작성

```js
// 전역이 오염되지 않도록 별도의 공간을 생성
// 스코프 함수 (즉시 실행되는 함수 내부)
(function(global, $){
	'use strict';

	// $.fn.radioClass 플러그인이 존재하지 않는다면?
	if ( !$.fn.radioClass ) {

		/**
		 * $.fn.radioClass 플러그인 정의
		 * @param  {string} name    radioClass를 적용할 class 속성 이름
		 * @param  {string} context radioClass를 적용할 콘텍스트 선택자
		 * @return {jQuery Object}  $() 인스턴스 객체
		 */
		$.fn.radioClass = function(name, context) {

			// context의 기본 값 설정
			// 사용자 정의 값이 있으면 덮어쓰기
			context = context || '';

			// 유효성검사
			if ( $.type(name) !== 'string' ) {
				throw new TypeError('전달된 name 인자는 문자열이어야 합니다.');
			}
			if ( $.type(context) !== 'string' ) {
				throw new TypeError('전달된 context 인자는 문자열이어야 합니다.');
			}

			// context가 설정되어 있으면 this 인스턴스 객체로부터
			// 가장 가까운 DOM 객체를 찾아 jQuery 인스턴스 객체를 반환
			var _this = context ? this.closest(context) : this;

			// jQuery 플러그인 내부의 this가 참조하는 것은?
			// this가 참조하는 것은 $() 인스턴스 객체
			_this.addClass(name);

			// _this 인스턴스 객체의 형제 인스턴스 집합을 찾아서
			var $siblings = _this.siblings();
			// 집합 내부를 순환하여 name 클래스 속성 이름 값을 가진
			// 아이템에서 name 클래스 속성 제거
			$.each($siblings, function(index, el) {
				var _$sibling = $siblings.eq(index);
				if ( _$sibling.hasClass(name) ) {
					_$sibling.removeClass(name);
				}
			});

			// jQuery 체이닝을 위한 this 반환 설정
			return this;

		}; // 끝: $.fn.radioClass

	} // 끝: if

})(window, window.jQuery);
```

-

#### AMD 방식으로 `jquery.radioClass` 플러그인 코드 변경

```js
/**
 * AMD 모듈 정의
 */
define(['jquery'], function($) {

	'use strict';

	// $.fn.radioClass 플러그인이 존재하지 않는다면?
	if ( !$.fn.radioClass ) {

		/**
		 * $.fn.radioClass 플러그인 정의
		 * @param  {string} name    radioClass를 적용할 class 속성 이름
		 * @param  {string} context radioClass를 적용할 콘텍스트 선택자
		 * @return {jQuery Object}  $() 인스턴스 객체
		 */
		$.fn.radioClass = function(name, context) {

			// context의 기본 값 설정
			// 사용자 정의 값이 있으면 덮어쓰기
			context = context || '';

			// 유효성검사
			if ( $.type(name) !== 'string' ) {
				throw new TypeError('전달된 name 인자는 문자열이어야 합니다.');
			}
			if ( $.type(context) !== 'string' ) {
				throw new TypeError('전달된 context 인자는 문자열이어야 합니다.');
			}

			// context가 설정되어 있으면 this 인스턴스 객체로부터
			// 가장 가까운 DOM 객체를 찾아 jQuery 인스턴스 객체를 반환
			var _this = context ? this.closest(context) : this;

			// jQuery 플러그인 내부의 this가 참조하는 것은?
			// this가 참조하는 것은 $() 인스턴스 객체
			_this.addClass(name);

			// _this 인스턴스 객체의 형제 인스턴스 집합을 찾아서
			var $siblings = _this.siblings();
			// 집합 내부를 순환하여 name 클래스 속성 이름 값을 가진
			// 아이템에서 name 클래스 속성 제거
			$.each($siblings, function(index, el) {
				var _$sibling = $siblings.eq(index);
				if ( _$sibling.hasClass(name) ) {
					_$sibling.removeClass(name);
				}
			});

			// jQuery 체이닝을 위한 this 반환 설정
			return this;

		}; // 끝: $.fn.radioClass

	} // 끝: if

});
```

-

#### QUnit 테스트 코드

###### QUnit API

- QUnit.module()
- QUnit.test()
- assert.ok()
- assert.strictEqual()

```js
(function(global, Q, $){
	'use strict';

	var class_name = 'clicked';

	// QUnit 모듈 정의
	Q.module('jquery.radioClass', {
		beforeEach: function() {
			var self = this;
			self.name = class_name;
			self.$demo = $('#demo');
			self.$demo.on('click', 'li > a', function(e) {
				e.preventDefault();
				$(this).radioClass( self.name, 'li' );
			});
		}
	});

	Q.test('jQuery v1.x 버전을 사용하는가?', 2, function(A) {
		// A.expect(2);
		A.strictEqual($, window.jQuery, 'jQuery 사용 준비 완료!');
		A.ok($.fn.jquery[0] === '1', 'jQuery 1.x 버전대 사용!');
	});

	Q.test('$.fn은 jQuery.prototype인가?', function(A){
		A.strictEqual($.fn, jQuery.prototype, '$.fn은 jQuery.prototype이 맞습니다.');
	});

	Q.test('$.fn.radioClass가 존재하는가?', function(A){
		A.ok($.fn.radioClass, '존재합니다.');
	});

	Q.test('#demo li:first-child > a 요소의 부모 요소에 "'+ class_name +'" class 속성이 추가되었는가?', function(A) {
		var _demo = this.$demo,
			_demo__a = _demo.find('li:first-child > a').trigger('click');
		A.ok(_demo__a.parent().hasClass(this.name));
	});

})(window, window.QUnit, window.jQuery);
```

-

#### AMD 방식으로 `jquery.radioClass` 활용 예시 - `src/main.js`

```js
require(['jquery.radioClass.test'], function() {

	// 템플릿
	var html_template = '';
	html_template += '<li><a href="">야무 한글 로렘입숨.</a></li>';
	html_template += '<li><a href="">흐르는, 고동소리?</a></li>';
	html_template += '<li><a href="">티셔츠, 흐르는?</a></li>';
	html_template += '<li><a href="">설레는, 운동화도.</a></li>';
	html_template += '<li><a href="">청춘, 찬란한.</a></li>';

	// 코드 동적 생성
	$('<ul>',{
		'id': 'after-demo',
		'html': html_template,
		'css': {
			width: '10rem'
		},
		'on': {
			'click': function(e) {
				e.preventDefault();
				$(e.target).radioClass('clicked', 'li');
			}
		}
	})
	.insertAfter('#demo')
	// ul#after-demo > li:nth-child(3)
	.find('li').eq(2)
		// ul#after-demo > li:nth-child(3) > a
		.children('a').trigger('click');

});
```

---

### 다시 보는 RequireJS `r.js` 설정

**단일 JS 파일을 만들고자 할 때**
```js
({
	// r.js 설정 API
	// https://github.com/jrburke/r.js/blob/master/build/example.build.js

	// 모듈 이름
	name: 'main',

	// 기본 경로
	// build/ 디렉토리 기준으로 설정
	// (현재 build 기준이기 때문에 배포할 기준의 js 로 이동하기 위해 build 폴더에서 나가서 js로 설정)
	baseUrl: '../js',

	// RequireJS - main.js 파일 위치
	mainConfigFile: "../js/main.js",

	// build 할 JS 파일디렉터리와 js 파일명을 출력 설정
	out: "../js/build/build.min.js",

	// 삽입할 라이브러리 설정
	include: ["requireLib"],

	// 경로 설정
	paths: {
			requireLib: 'libs/require',
			/**
			 * https://github.com/jrburke/requirejs/issues/791
			 * http://www.anthb.com/2014/07/04/optimising-requirejs-with-cdn-fallback
			 * http://requirejs.org/docs/optimization.html#empty
			 */
			'jquery': 'empty:'
	},

	// 최적화 설정
	optimize: "uglify2", // "none", "uglify2", "uglify"

	// 소스맵 생성 설정
	// #uglify를 쓸 때는 소스맵을 못 쓴다. uglify2를 쓰면 가능하다.
	generateSourceMaps: true, // 소스맵은 오류가 난 js를 알려준다. 압축된 js는 찾기가 어렵기 때문에 소스맵이 있어야 오류 파일의 라인을 알려준다.

	// 저작권 주석 보존 설정
	preserveLicenseComments: false,
})
```

**프로젝트 파일 모두 최적화할 경우**
```js
({
	// modules 속성을 사용하면 프로젝트의 모든 파일을 최적화, dir 속성 함께 사용해야 함.
	// http://requirejs.org/docs/optimization.html#wholeproject
	modules: [{
		name: "main",
		exclude: ['jquery']
	}],

	// modules와 함게 사용
	dir: "../dist",

	baseUrl: "../js",

	mainConfigFile: "../js/main.js",

	include: ["requireLib"],

	paths: {
		requireLib : 'libs/require',
		'jquery'   : 'empty:'
	},

	optimize                : "uglify2",

	generateSourceMaps      : true,

	preserveLicenseComments : false,

	// true로 설정하면 빌드되어 번들된 파일을 출력 폴더에서 제거함.
	// removeCombined: true,

	// 중첩된 의존 JS 찾기
	// findNestedDependencies: true,
})
```

-

### jQuery를 효율적으로 작성하는 21가지 방법
- [jQuery 코드는 이렇게 작성하세요](modules/better-writing-jquery.md)

-

### jQuery 플러그인 제작 방법
- [jQuery 플러그인 API](http://learn.jquery.com/plugins/)
- [jQuery 플러그인 제작 - 기본](making-jquery-plugin/01-plugin-basic.md)
- [jQuery 플러그인 제작 - 중급](making-jquery-plugin/01-plugin-advanced.md)

-

### jQuery 커스텀 빌드
`Custom Build`

- [jQuery + Grunt 사용자정의 빌드](https://github.com/jquery/jquery#how-to-build-your-own-jquery)
- [jQuery-builder 사용자정의 빌더](modules/jquery-builder.md)
- [야무의 영상강의: Custom Building jQuery on Windows](http://yamoo9.net/custom-building-jquery-on-windows/)

-

### Javascript 단위 테스트
`Unit Test`

**단위 테스트란?**
컴퓨터 프로그래밍에서 소스 코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하는 절차다. 즉, 모든 함수와 메소드에 대한 테스트 케이스(Test case)를 작성하는 절차를 말한다. 이를 통해서 언제라도 코드 변경으로 인해 문제가 발생할 경우, 단시간 내에 이를 파악하고 바로 잡을 수 있도록 해준다.

이상적으로, 각 테스트 케이스는 서로 분리되어야 한다. 이를 위해 가짜 객체(Mock object)를 생성하는 것도 좋은 방법이다. 유닛 테스트는 (일반적인 테스트와 달리) 개발자(developer) 뿐만 아니라 보다 더 심도있는 테스트를 위해 테스터(tester)에 의해 수행되기도 한다. [WIKI 문서 상세 읽기](https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%9B_%ED%85%8C%EC%8A%A4%ED%8A%B8)

- **왜 유닛 테스트를 해야 하는가?**
	- [왜 유닛 테스트를 해야 하는가? Part.1](http://blog.powerumc.kr/264)
	- [왜 유닛 테스트를 해야 하는가? Part.2](http://blog.powerumc.kr/265)

- **TDD `Test-driven Development`**
	- [TDD란?](http://blog.powerumc.kr/220) - 테스트 주도 개발

- **BDD `Behavior-driven Development`**
	- [BDD란?](http://blog.powerumc.kr/221) - 행위 주도 개발

### Javascript 단위 테스트 프레임워크
`Unit Test Frameworks`

- [TDD] [QUnit](http://qunitjs.com/) - jQuery 테스트 프레임워크
- [BDD] [Jasmine](http://jasmine.github.io/) [*](http://blog.outsider.ne.kr/673)
- [TDD/BDD] [Mocha](http://mochajs.org/) [*](http://blog.outsider.ne.kr/770)

### Javascript 테스크 러너
`Task Runner`

- [Karma](http://karma-runner.github.io/0.12/index.html) [*](http://blog.outsider.ne.kr/1020) [**](http://www.itworld.co.kr/news/86538)
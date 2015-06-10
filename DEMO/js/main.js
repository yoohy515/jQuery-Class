<!DOCTYPE html>
<html lang="ko-KR">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<title>JS 모듈로더: requireJS</title>
	<!-- <script src="js/libs/modernizr.custom.71961.js"></script> -->
	<!-- <script src="js/libs/detectizr.min.js"></script> -->
	<script src="js/require.js" data-main="js/main"></script>
	<!-- <script src="js/libs/jquery-1.11.3.min.js"></script> -->
</head>
<body>

<script>
	// 호출된 모듈 확인 코드
	console.log(
		'jQuery:' + window.jQuery+'\n',
		'Modernizr:' + window.Modernizr+'\n',
		'Detectizr:' + window.Detectizr
	);
</script>
</body>
</html>
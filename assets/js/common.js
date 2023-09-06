$(document).ready(function(){
	$('.top').length && goTop(); //페이지상단이동

	// 롤링 배너 복제본 생성
	let roller = document.querySelector('.list_bx');
	roller.id = 'roller1';
	let clone = roller.cloneNode(true)
	clone.id = 'roller2';
	document.querySelector('.bx_wrap .box').appendChild(clone);
	document.querySelector('#roller1').style.left = '0px';
	document.querySelector('#roller2').style.left = document.querySelector('.list_bx').offsetWidth + 'px';

	roller.classList.add('original');
	clone.classList.add('clone');
});

function goTop(){ //페이지상단이동
	$('.top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */

$(function(){
AOS.init({
  duration: 1500,
});
});


$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);




$(document).ready(function(){  
	
/* 메뉴바 slideUpDown */	
	$('.navlist > .navtop').mouseover(function(){
		var index = $(this).index();
		$('.dp2').eq(index).stop().slideDown();
	})

	$('.navlist > .navtop').mouseleave(function(){
		$('.dp2').stop().slideUp();
	});

});








































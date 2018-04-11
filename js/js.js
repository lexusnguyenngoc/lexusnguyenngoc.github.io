$(function () {
	// body...
	$(window).scroll(function() {
		var connect = document.getElementById("connection");
		if ($(window).scrollTop() > 500) {
			connect.style.right = '0';
			connect.style.opacity = '1';
			connect.style.visibility = 'visible';
		}
		else {
			connect.style.right = '-30px';
			connect.style.opacity = '0';
			connect.style.visibility = 'hidden';
		}
		if ($(window).scrollTop() > 100) {
			$('.navbar').addClass('fixed-top-100');
			$('.banner').addClass('mt-menu');
		}
		else {
			$('.navbar').removeClass('fixed-top-100');
			$('.banner').removeClass('mt-menu');
		}
		if ($(window).scrollTop() > 200) {
			$('.navbar').addClass('fixed-top');
		}
		else {
			$('.navbar').removeClass('fixed-top');
		}
	});
	$('body').append('<div id="toTop"></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
	$('#select-1').click(function () {
		$('#select-1').addClass('active');
		$('#select-2').removeClass('active');
		$('#select-3').removeClass('active');
		$('#select-4').removeClass('active');
		$('#detail-1').show();
		$('#detail-2').hide();
		$('#detail-3').hide();
		$('#detail-4').hide();
	})
	$('#select-2').click(function () {
		$('#select-2').addClass('active');
		$('#select-1').removeClass('active');
		$('#select-3').removeClass('active');
		$('#select-4').removeClass('active');
		$('#detail-2').show();
		$('#detail-1').hide();
		$('#detail-3').hide();
		$('#detail-4').hide();
	})
	$('#select-3').click(function () {
		$('#select-3').addClass('active');
		$('#select-2').removeClass('active');
		$('#select-1').removeClass('active');
		$('#select-4').removeClass('active');
		$('#detail-3').show();
		$('#detail-2').hide();
		$('#detail-1').hide();
		$('#detail-4').hide();
	})
	$('#select-4').click(function () {
		$('#select-4').addClass('active');
		$('#select-2').removeClass('active');
		$('#select-3').removeClass('active');
		$('#select-1').removeClass('active');
		$('#detail-4').show();
		$('#detail-2').hide();
		$('#detail-3').hide();
		$('#detail-1').hide();
	})
})
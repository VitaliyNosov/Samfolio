$(function () {

	// Menu

	$('.menu-triger').click(function () {

		$('nav ul').slideToggle(500);
	});
	$(window).resize(function () {

		if ($(window).width() > 500) {

			$('nav ul').removeAttr('style');
		}
	});

	// carusel one

	var carusel1 = $('.owl-carousel');
	carusel1.owlCarousel({
		items: 1,
		dots: false
		
	});
	// Go to the next item
	$('.customNextBtn').click(function () {
		console.log('dcdcdcs');
		carusel1.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn').click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		carusel1.trigger('prev.owl.carousel', [300]);
	})



// carusel two

var carusel2 = $('.owl-carousel');
carusel2.owlCarousel({
	items: 1,
	dots: false

});

// Go to the next item
$('#customNextBtn').click(function () {
	console.log('dcdcdcs');
	carusel2.trigger('next.owl.carousel');
})
// Go to the previous item
$('#customPrevBtn').click(function () {
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	carusel2.trigger('prev.owl.carousel', [300]);
})


//Cirle Loader


	$(function () {


		$("#viewport").viewportChecker({

			callbackFunction: function () {

				//ТУТ СКРИПТ ИЛИ НАСТРОЙКА

				$(".progress-bar").loading();

			}
		});

	});

	


});


//btton top


document.onscroll = my_func; // Вызываем у нашего документа метод onscroll 
// и присваеваем ему имя функции 

function my_func() {

	var sc = jQuery(document).scrollTop();

	if (sc > 300 && jQuery(".on_top").css("display") != "block") {
		jQuery(".on_top").css({ "display": "block" });

		block_in(0.1, jQuery(".on_top"));
	}

	else if (sc < 300 && jQuery(".on_top").css("display") != "none") {
		//jQuery(".on_top").css({ "display": "none" });

		block_out(jQuery(".on_top").css("opasity"), jQuery(".on_top"));
	}



}


function block_in(op, elem) {

	elem.css({ "opacity": op });

	op += 0.1;

	if (op < 1) {

		setTimeout(function () {
			block_in(op, elem)
		},
			50);
	}

}

function block_out(op, elem) {

	elem.css({ "opacity": op });

	op -= 0.1;

	if (op > 0) {

		setTimeout(function () {
			block_in(op, elem)
		},
			50);
	}

	else {

		jQuery(".on_top").css({ "display": "none" });

	}


}

function to_top() {

	var root = jQuery(document);

	var scrol = root.scrollTop();

	scrol -= 10;

	root.scrollTop(scrol);

	if (scrol > 0) {

		setTimeout(to_top, 1); // Рекурсивно вызываем функцию
	}

}


 




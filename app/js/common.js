	$(document).ready(function () {
		 
	// Menu

	$('.menu-triger').click(function () {

		$('nav ul').slideToggle(500);
	});
	$(window).resize(function () {

		if ($(window).width() > 500) {

			$('nav ul').removeAttr('style');
		}
	});

	});
		


$(function() {


	$("#viewport").viewportChecker({

		callbackFunction: function () {

			//ТУТ СКРИПТ ИЛИ НАСТРОЙКА

			$('.circlechart').circlechart(); // Initialization

		}
	});

// Используем два скрипта. Один отвечает за прогрузку прилоадера посути это плагин.
// А другой скрипт отвечает за отработку это плагина при прокрутке к блоку в котором он находится.


	// my slider " new Siema "

	const mySiema = new Siema({

		duration: 350,
	});

	document.querySelector('.prev').addEventListener('click', () => mySiema.prev());

	document.querySelector('.next').addEventListener('click', () => mySiema.next());

	// my owl carusel 2

	$('.owl-carousel').owlCarousel({

		items: 1,

		dots: false,
		
		nav: true
	})



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

// My polifil IE

flexibility(document.documentElement);









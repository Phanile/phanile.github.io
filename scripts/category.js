document.addEventListener('DOMContentLoaded', function(){
	var sortByPrice = document.getElementById('sort-by-price'),
		sortByUpdate = document.getElementById('sort-by-update'),
		direction = 'none',
		working = 'none';

	sortByPrice.addEventListener('click', function () {         // Чуть-чуть подправил код
		if (working == 'second'){                               // Теперь если активирована одна кнопка, тогда вторая может активироваться,
			direction = 'none';                                 // но сбрасывает значение первой
			updateIcon('update', direction);
		};
			
		working = 'first';
		
		if (direction == 'none'){
			direction = 'up';
			updateIcon('price', direction);
		}
		else if (direction == 'up'){
			direction = 'down';
			updateIcon('price', direction);
		}
		else if (direction == 'down'){
			direction = 'none';
			updateIcon('price', direction);
			working = 'none';
		};
	});

	sortByUpdate.addEventListener('click', function () {
		if (working == 'first'){
			direction = 'none';
			updateIcon('price', direction);
			};
			
		working = 'second';
		
		if (direction == 'none'){
			direction = 'up';
			updateIcon('update', direction);
		}
		else if (direction == 'up'){
			direction = 'down';
			updateIcon('update', direction);
		}
		else if (direction == 'down'){
			direction = 'none';
			updateIcon('update', direction);
			working = 'none';
		};
	});

 ////////////////////////////////// col-left, col-right replacement //////////////////////////////////

	var cards = document.getElementsByClassName('img-card');

	if (window.innerWidth > 767){
		for (var i = 0; i < cards.length; i++){
			if (i % 2 != 0){
				cards[i].style.marginLeft = '-7px';
			} else{
				cards[i].style.marginRight = '-7px';
			};
		};
	};
});

function updateIcon (type, direction) {
	var icon = document.getElementById('sort-by-' + type + '-icon');
	icon.setAttribute('src', ('data/sort-' + direction + '.svg'));
};
	//"{% static 'images/sort-" + direction + ".svg' %}"
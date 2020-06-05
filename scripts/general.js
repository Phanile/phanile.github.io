document.addEventListener('DOMContentLoaded', function(){
	headerAnimation();
});

function headerAnimation () {
	if (window.innerWidth > 767){
		expandAnim();
	}
	else{
		expandAnimMobile();
	}
}

//menu

function expandAnim () {
	var header = document.getElementsByClassName('header')[0];
		headerBack = document.getElementById('header-back');
		headerButtons = document.getElementById('header').childNodes;
		isOpen = false;

	console.log(headerButtons)

	function menuClose () {
		isOpen = false;
		header.classList.remove('header-open');
		headerBack.style.backgroundColor = '';
		headerBack.style.transition = '';
		setTimeout(function(){
			user.setAttribute('src', 'data/user.svg');
			phone.setAttribute('src', 'data/phone.svg');
			heart.setAttribute('src', 'data/heart.svg');
			cart.setAttribute('src', 'data/cart.svg');
			home.setAttribute('src', 'data/home.svg');
		}, 300)
	}	
	
	for (var i = 1; i < 8; i += 2){
		if (i != 5){
			headerButtons[i].addEventListener('click', function(){
				if (!isOpen){
					isOpen = true;
					header.classList.add('header-open');
					headerBack.style.backgroundColor = '#FFFFFF';
					headerBack.style.transition = '0s';
					user.setAttribute('src', 'data/user-dark.svg');
					phone.setAttribute('src', 'data/phone-dark.svg');
					heart.setAttribute('src', 'data/heart-dark.svg');
					cart.setAttribute('src', 'data/cart-dark.svg');
					home.setAttribute('src', 'data/home-dark.svg');
				}else{
					isOpen = false;
					header.classList.remove('header-open');
					headerBack.style.backgroundColor = '';
					headerBack.style.transition = '';
					setTimeout(function(){
						user.setAttribute('src', 'data/user.svg');
						phone.setAttribute('src', 'data/phone.svg');
						heart.setAttribute('src', 'data/heart.svg');
						cart.setAttribute('src', 'data/cart.svg');
						home.setAttribute('src', 'data/home.svg');
					}, 300)
				}
			});
		}
	}

	header.onmouseleave = function(){
		menuClose();
	}
}

//menu mobile

function expandAnimMobile () {
	var button = document.getElementById('menu');
		header = document.getElementsByClassName('header')[0];
		headerOverlay = document.getElementsByClassName('header-overlay')[0];
		svgMain = document.getElementsByClassName('a-icon');
		categoriesBlock = document.getElementsByClassName('categories')[0];
		artistsBlock = document.getElementsByClassName('artists')[0];
		artistsText = document.createElement('p');
		categoriesText = document.createElement('p');
		
		user.setAttribute('src', 'data/user-dark.svg');
		heart.setAttribute('src', 'data/heart-dark.svg');
		cart.setAttribute('src', 'data/cart-dark.svg');
		home.setAttribute('src', 'data/home-dark.svg');

	categoriesText.className = 'head-text h';
	artistsText.className = 'head-text h';
	categoriesText.innerHTML = 'Categories';
	artistsText.innerHTML = 'Artists';

	button.addEventListener('click', function(){
		if (header.id != 'mobile'){              //with open
			header.style.transition = '0s';
			header.style.zIndex = '10';
			header.setAttribute('id', 'mobile');
			headerOverlay.setAttribute('id', 'header-overlay');
			artistsBlock.prepend(artistsText);
			categoriesBlock.prepend(categoriesText);
			onClickClose(header);
			for (var i = 0; i < 6; i++){
				if (i != 1){
					svgMain[i].style.display  = 'block';
				};
			};
			disableScroll();
		}
		else{              //with close
			header.removeAttribute('id', 'mobile');
			headerOverlay.removeAttribute('id', 'header-overlay');
			header.style.zIndex = '4';
			for (var i = 0; i < 6; i++){
				if (i != 1){
					svgMain[i].style.display  = 'none';
				};
			};
			enableScroll();
		};
	});
};

//Close menu

function onClickClose(elem) { // вызвать в момент показа окна, где elem - окно
    function outsideClickListener(event) {
        if (!elem.contains(event.target)) {  // проверяем, что клик не по элементу
            elem.removeAttribute('id', 'mobile'); //скрыть
            headerOverlay.removeAttribute('id', 'header-overlay'); //скрыть
			for (var i of svgMain){
				i.style.display  = 'none';
			}
            document.removeEventListener('click', outsideClickListener);
        }
    };
    document.addEventListener('click', outsideClickListener);
};
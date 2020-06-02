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
		user = document.getElementById('user');
		phone = document.getElementById('phone');
		heart = document.getElementById('heart');
		cart = document.getElementById('cart');
		isOpen = false;
	
	header.onmouseenter = function(){
		isOpen = true;
		this.style.maxHeight = '9000px';
		user.setAttribute('src', 'data/user-dark.svg');
		phone.setAttribute('src', 'data/phone-dark.svg');
		heart.setAttribute('src', 'data/heart-dark.svg');
		cart.setAttribute('src', 'data/cart-dark.svg');
	}
	header.onmouseleave = function(){
		isOpen = false;
		this.style.maxHeight = '60px';
		setTimeout(function(){
			user.setAttribute('src', 'data/user.svg');
			phone.setAttribute('src', 'data/phone.svg');
			heart.setAttribute('src', 'data/heart.svg');
			cart.setAttribute('src', 'data/cart.svg');
		}, 300)
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
		
		document.getElementById('user').setAttribute('src', 'data/user-dark.svg');
		document.getElementById('heart').setAttribute('src', 'data/heart-dark.svg');
		document.getElementById('cart').setAttribute('src', 'data/cart-dark.svg');

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
			for (var i of svgMain){
				i.style.display  = 'block';
			}
		}
		else{              //with close
			header.removeAttribute('id', 'mobile');
			headerOverlay.removeAttribute('id', 'header-overlay');
			header.style.zIndex = '4';
			for (var i of svgMain){
				i.style.display  = 'none';
			}
		}
	})
}

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
    }
    document.addEventListener('click', outsideClickListener);
}
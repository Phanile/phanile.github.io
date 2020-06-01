document.addEventListener('DOMContentLoaded', function(){
	headerAnimation();
});

function headerAnimation () {
	if (window.innerWidth > 768){
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
		setTimeout(function(){
			user.setAttribute('src', 'https://img.icons8.com/material-sharp/28/1C1C1C/user.png');
			phone.setAttribute('src', 'https://img.icons8.com/ios-glyphs/28/1C1C1C/phone--v1.png');
			heart.setAttribute('src', 'https://img.icons8.com/pastel-glyph/28/1C1C1C/hearts.png');
			cart.setAttribute('src', 'https://img.icons8.com/pastel-glyph/28/1C1C1C/shopping-cart--v1.png');
		}, 100)
	}
	header.onmouseleave = function(){
		isOpen = false;
		this.style.maxHeight = '60px';
		setTimeout(function(){
			user.setAttribute('src', 'https://img.icons8.com/material-sharp/28/FFFFFF/user.png');
			phone.setAttribute('src', 'https://img.icons8.com/ios-glyphs/28/FFFFFF/phone--v1.png');
			heart.setAttribute('src', 'https://img.icons8.com/pastel-glyph/28/FFFFFF/hearts.png');
			cart.setAttribute('src', 'https://img.icons8.com/pastel-glyph/28/FFFFFF/shopping-cart--v1.png');
		}, 300)
	}
}

//menu mobile

function expandAnimMobile () {
	var button = document.getElementById('menu');
		header = document.getElementsByClassName('header')[0];
		headerOverlay = document.getElementsByClassName('header-overlay')[0];
		svg = document.getElementsByClassName('header-icon');
		svgMain = document.getElementsByClassName('a-icon');
		categoriesBlock = document.getElementsByClassName('categories')[0];
		artistsBlock = document.getElementsByClassName('artists')[0];
		artistsText = document.createElement('p');
		categoriesText = document.createElement('p');

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
			for (var i = 0; i < svg.length; i++){
				svg[i].setAttribute('fill', '#1C1C1C');
				svgMain[i].style.display = 'block';
			};
			artistsBlock.prepend(artistsText);
			categoriesBlock.prepend(categoriesText);
			onClickClose(header);
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
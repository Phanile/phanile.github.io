document.addEventListener('DOMContentLoaded', function(){
	headerAnimation();
});

function headerAnimation () {
	if (window.innerWidth > 700){
		expandAnim();
	}
	else{
		expandAnimMobile();
		choiseLink = document.getElementsByClassName('a-full')[0];
		choiseLink.setAttribute('id', 'a-full')
	}
}

//menu

function expandAnim () {
	var header = document.getElementsByClassName('header')[0];
		headerBack = document.getElementById('header-back');
		svg = document.getElementsByClassName('header-icon');
		isOpen = false;
	
	header.onmouseenter = function(){
		isOpen = true;
		this.style.maxHeight = '9000px';
		for (var i = 0; i < svg.length; i++){
			svg[i].setAttribute('fill', '#1C1C1C');
		}
	}
	header.onmouseleave = function(){
		isOpen = false;
		this.style.maxHeight = '60px';
		for (var i = 0; i < svg.length; i++){
			svg[i].setAttribute('fill', '#FFFFFF');
		}
	}
}

//menu mobile

function expandAnimMobile () {
	var button = document.getElementById('menu');
		header = document.getElementsByClassName('header')[0];
		headerOverlay = document.getElementsByClassName('header-overlay')[0];
		svg = document.getElementsByClassName('header-icon');
		svgMain = document.getElementsByClassName('a-icon');
	button.addEventListener('click', function(){
		if (header.id != 'mobile'){              //with open
			header.setAttribute('id', 'mobile');
			headerOverlay.setAttribute('id', 'header-overlay');
			for (var i = 0; i < svg.length; i++){
				svg[i].setAttribute('fill', '#1C1C1C');
				svgMain[i].style.display = 'block';
			}
			onClickClose(header);
		}
		else{              //with close
			header.removeAttribute('id', 'mobile');
			headerOverlay.removeAttribute('id', 'header-overlay');
			for (var i = 0; i < svg.length; i++){
				svgMain[i].style.display  = 'none';
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
			for (var i = 0; i < svg.length; i++){
				svgMain[i].style.display  = 'none';
			}
            document.removeEventListener('click', outsideClickListener);
        }
    }
    document.addEventListener('click', outsideClickListener);
}
window.onload = function(){
	headerAnimation();
}

function headerAnimation () {
	if (window.innerWidth > 992){
		expandAnim();
		catName = document.getElementsByClassName('categories-name');
		fontSize(catName);
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

	function scrollUpdate () {
		var coord = pageYOffset;

		if (coord > 991 && isOpen == false){
			headerBack.style.height = '60px';
		} 
		else{
			headerBack.style.height = '0px';
		}
	}

	scrollUpdate()

	
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
		scrollUpdate()
	}

	window.addEventListener('scroll', function() {
		scrollUpdate()
	});
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

//font size from word's lenght

function fontSize(h1) {
	var f = 0;
	for (var i = 0; i < 4; i++){
		if (h1[i].innerHTML.length > 20)
			f = 2
		else if (h1[i].innerHTML.length > 10)
			f = 1
	}
	for (var i = 0; i < 4; i++){
		if (f == 1)
			h1[i].style.fontSize = '32px';
		else if (f == 2)
			h1[i].style.fontSize = '26px';
	}
}

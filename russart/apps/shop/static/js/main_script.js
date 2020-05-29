window.onload = function(){
	headerAnimation();
}

function headerAnimation () {
	if (window.innerWidth > 992){
		expandAnim()
	}
	else{
		expandAnimMobile()
	}
}

function expandAnim () {
	var header = document.getElementsByClassName('header')[0];
		headerBack = document.getElementById('header-back');
		svg = document.getElementsByClassName('header-icon');
		isOpen = false;

	function scrollUpdate () {
		var coord = pageYOffset;

		if (coord > 700 && isOpen == false){
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

function expandAnimMobile () {
	var button = document.getElementById('menu');
		header = document.getElementsByClassName('header')[0];
		isOpen = false;
		button.addEventListener('click', function(){
			if (isOpen == false){
				isOpen = true;
				header.classList.add('mobile');
			}
			else{
				isOpen = false;
				header.classList.remove('mobile');
			}
		})
}
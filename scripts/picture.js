document.addEventListener('DOMContentLoaded', function(){
	enableOpenPicture();
	enableOpenButtons();

	if (window.innerWidth < 576) {
		changeChoiseBtns();
	}
});

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        };
};

function enableScroll() {
    window.onscroll = function() {};
};

function enableOpenPicture () {
	var popUp = document.getElementsByClassName('pop-up-img')[0],
		pictureFull = document.getElementById('main-pop-up-img'),
		closeIcon = document.getElementById('close-icon-img'),
		overlay = document.getElementById('background-overlay-img'),
		isOpen = false;

	picture.addEventListener('click', function(){//------------  Open
		if (!isOpen){
			isOpen = true;
			popUp.classList.add('open-pop-up-img');
			disableScroll();
		};

		overlay.onclick = function(event){
			var target = event.target;
			console.log(target.id)

			if (isOpen && target.id == 'background-overlay-img'){
				isOpen = false;
				popUp.classList.remove('open-pop-up-img');
				enableScroll();
			};
		};
	});

	closeIcon.addEventListener('click', function(){//-------------  Close
		if (isOpen){
			isOpen = false;
			popUp.classList.remove('open-pop-up-img');
			enableScroll();
		}
	});
};

function enableOpenButtons () {
	var addCart = document.getElementsByClassName('btn-cart'),
		continueShopping = document.getElementById('continue-btn'),
		popUp = document.getElementsByClassName('pop-up-to-cart')[0],
		isOpen = false;

	addCart[0].addEventListener('click', function () {
		if (!isOpen){
			isOpen = true;
			popUp.classList.add('open-pop-up-to-cart');
			disableScroll();
		};

		popUp.onclick = function(event){
			var target = event.target;
			console.log(target.id)

			if ((isOpen && target.classList[0] == 'pop-up-to-cart') || target.id == 'continue-btn'){
				isOpen = false;
				popUp.classList.remove('open-pop-up-to-cart');
				enableScroll();
			};
		};
	});

	addCart[1].addEventListener('click', function () {
		if (!isOpen){
			isOpen = true;
			popUp.classList.add('open-pop-up-to-cart');
			disableScroll();
		};

		popUp.onclick = function(event){
			var target = event.target;
			console.log(target.id)

			if ((isOpen && target.classList[0] == 'pop-up-to-cart') || target.id == 'continue-btn'){
				isOpen = false;
				popUp.classList.remove('open-pop-up-to-cart');
				enableScroll();
			};
		};
	});
};

function changeChoiseBtns () {
	var buttons = document.getElementsByClassName('choise-btn');

	buttons[0].innerHTML = 'continue'
	buttons[1].innerHTML = 'to cart'
}
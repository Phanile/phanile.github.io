document.addEventListener('DOMContentLoaded', function(){
	var popUp = document.getElementsByClassName('pop-up')[0],
		pictureFull = document.getElementById('main-pop-up'),
		closeIcon = document.getElementById('close-icon'),
		isOpen = false;

	picture.addEventListener('click', function(){
		if (!isOpen){
			isOpen = true;
			popUp.classList.add('open-pop-up');
			disableScroll();
		}
	});

	closeIcon.addEventListener('click', function(){
		if (isOpen){
			isOpen = false;
			popUp.classList.remove('open-pop-up');
			enableScroll();
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
});
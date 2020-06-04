document.addEventListener('DOMContentLoaded', function(){
	var popUp = document.getElementsByClassName('pop-up')[0],
		pictureFull = document.getElementById('main-pop-up'),
		closeIcon = document.getElementById('close-icon'),
		button = document.getElementById('checkout-btn'),
		inputBlock = document.getElementById('input-block-full'),
		overlay = document.getElementById('background-overlay'),
		inputContentFirst = inputBlock.innerHTML,
		nextBtn = document.getElementById('next-btn'),
		arrows = document.getElementsByClassName('arrows'),
		isOpen = false,
		inputContentSecond = `<div class="input-block"><p>Choose payment method</p></div>`;

	button.addEventListener('click', function(){//------------  pop-up delivery block opening
		if (!isOpen){
			isOpen = true;
			popUp.classList.add('open-pop-up');
			disableScroll();

			nextBtn.addEventListener('click', function(){
				changeInput();
			});

			overlay.onclick = function(event){
				var target = event.target;

				if (isOpen && target.id == 'background-overlay'){
					isOpen = false;
					popUp.classList.remove('open-pop-up');
					enableScroll();

					nextBtn.removeEventListener('click', function(){
						changeInput();
					});
				};
			};

		};
	});

	closeIcon.addEventListener('click', function(){//------------  pop-up delivery block closing
		if (isOpen){
			isOpen = false;
			popUp.classList.remove('open-pop-up');
			enableScroll();

			nextBtn.removeEventListener('click', function(){
				changeInput();
			});
		};
	});

	function changeInput () {
		inputBlock.innerHTML = inputContentSecond;
		arrows[0].style.cursor = 'pointer';
		arrows[0].style.opacity = '1';

		nextBtn.display = 'none'

		arrows[0].addEventListener('click', function(){
			changeInputBack()
		});
	};

	function changeInputBack () {
		inputBlock.innerHTML = inputContentFirst;
		arrows[0].style.cursor = 'default';
		arrows[0].style.opacity = '0';

		nextBtn.display = ''
	};

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
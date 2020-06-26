document.addEventListener('DOMContentLoaded', function(){
	var popUp = document.getElementsByClassName('pop-up')[0],
		pictureFull = document.getElementById('main-pop-up'),
		closeIcon = document.getElementById('close-icon'),
		button = document.getElementsByClassName('checkout-btn'),
		inputBlock = document.getElementById('input-block-full'),
		overlay = document.getElementById('background-overlay'),
		inputContentFirst = inputBlock.innerHTML,
		nextBtn = document.getElementsByClassName('next-btn'),
		arrows = document.getElementsByClassName('arrows'),
		isOpen = false,
		inputContentSecond = `<div class="input-block"><p class="text">Before you pay, make sure that you have entered your data correctly and selected the desired paintings. Make sure that you seen the whole picture by increasing it on the painting page. After payment you will receive a notification to your e-mail. Thank you.</p></div>`;

	button[0].addEventListener('click', mainPopUpFunc);
	button[1].addEventListener('click', mainPopUpFunc);

	function mainPopUpFunc(){//------------  pop-up delivery block opening
		if (!isOpen){
			isOpen = true;
			popUp.classList.add('open-pop-up');
			disableScroll();

			nextBtn[0].addEventListener('click', function(){
				changeInput();
			});

			overlay.onclick = function(event){
				var target = event.target;

				if (isOpen && target.id == 'background-overlay'){
					isOpen = false;
					popUp.classList.remove('open-pop-up');
					enableScroll();

					nextBtn[0].removeEventListener('click', function(){
						changeInput();
					});
				};
			};

		};
	};

	closeIcon.addEventListener('click', function(){//------------  pop-up delivery block closing
		if (isOpen){
			isOpen = false;
			popUp.classList.remove('open-pop-up');
			enableScroll();

			nextBtn[0].removeEventListener('click', function(){
				changeInput();
			});
		};
	});

	function changeInput () {
		inputBlock.innerHTML = inputContentSecond;
		arrows[0].style.cursor = 'pointer';
		arrows[0].style.opacity = '1';

		nextBtn[0].style.display = 'none'

		arrows[0].addEventListener('click', function(){
			changeInputBack()
		});
	};

	function changeInputBack () {
		inputBlock.innerHTML = inputContentFirst;
		arrows[0].style.cursor = 'default';
		arrows[0].style.opacity = '0';

		nextBtn[0].style.display = 'block'
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

	// translation

	footer.onclick = function (event) {
		var btn = document.getElementsByClassName('lang')[0];
		if (event.target.id == 'en'){
			btn.innerHTML = 'next'
			changeLang('en')
			inputContentSecond = `<div class="input-block"><p class="text">Before you pay, make sure that you have entered your data correctly and selected the desired paintings. Make sure that you seen the whole picture by increasing it on the painting page. After payment you will receive a notification to your e-mail. Thank you.</p></div>`;
		} else if (event.target.id == 'ru'){
			btn.innerHTML = 'далее'
			changeLang('ru')
			inputContentSecond = `<div class="input-block"><p class="text">Перед оплатой убедитесь, что Вы правильно ввели данные и выбрали нужные картины. Убедитесь, что вы увидели картину целиком, увеличив ее на ее странице. После оплаты Вы получите уведомление на свой электронный адрес. Спасибо.</p></div>`;
		}
	}

	function changeLang (to) {
	var ru = document.getElementsByClassName('ru'),
		en = document.getElementsByClassName('en');

	if (to == 'ru'){
		for (var i = 0; i < ru.length; i++){
			en[i].style.display = 'none';
			ru[i].style.display = 'block';
		}
	} else{
		for (var i = 0; i < ru.length; i++){
			ru[i].style.display = 'none';
			en[i].style.display = 'block';
		}
	}
}
});
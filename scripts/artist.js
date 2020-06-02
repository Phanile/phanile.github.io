document.addEventListener('DOMContentLoaded', function(){
	var textDesktop = document.getElementById('artist-text-desktop'),
		textMobile = document.getElementById('artist-text-mobile'),
		artistBack = document.getElementById('artist-back'),
		mob = textMobile.innerHTML,
		desk = textDesktop.innerHTML,
		isMobile = true;

	if (textDesktop.innerHTML.length > 250){           // text alignment on desktop
		textDesktop.style.width = '100%';
	};

	if (window.innerWidth < 768){

		textMobile.innerHTML = desk;
		var textHeight = textMobile.offsetHeight;
		textMobile.innerHTML = mob;

		artistBack.addEventListener('click', function(){          // artist information expand
			if (isMobile){
				textMobile.innerHTML = desk;
				isMobile = false;
				artistBack.style.height = (440 + textHeight) + 'px';
			} else{
				textMobile.innerHTML = mob;
				isMobile = true;
				artistBack.style.height = '';
			};
		});
	};
});
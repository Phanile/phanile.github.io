document.addEventListener('DOMContentLoaded', function(){
	if (window.innerWidth > 992){
		catName = document.getElementsByClassName('categories-name');
		fontSize(catName);
	}
});

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
};
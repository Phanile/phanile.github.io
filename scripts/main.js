document.addEventListener('DOMContentLoaded', function(){

	commentsColor();
	commentOpenEnable();

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

function commentsColor() {
	var comments = document.getElementsByClassName('comment'),
		commentBorder = document.getElementsByClassName('comment-text');

	console.log(comments)
	for(var i = 1; i < comments.length; i += 2){
		comments[i].style.color = 'rgba(230, 128, 56, .95)';
		commentBorder[i].style.borderLeft = '1px solid rgba(247, 151, 83, .6)'
	};
};

function commentOpenEnable() {
	var text = document.getElementsByClassName('write-comment')[0],
		btn = document.getElementById('write-comment-btn');

	btn.addEventListener('click', function(){
		text.classList.add('write-comment-open');
	});

	btn.removeEventListener('click', function(){
		text.classList.add('write-comment-open');
	});
};
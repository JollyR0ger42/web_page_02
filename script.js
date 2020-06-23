const checkbox = document.getElementById('nav-checkbox');
const navBar = document.querySelector('header nav');

function navCheckbox(){
	if(!checkbox.checked){
		navBar.style.marginBottom = '250px'
	} else {
		navBar.style.removeProperty('margin-bottom')
	}
}

const collapsibles = document.getElementsByClassName('collapsible');

for(const collapsible of collapsibles){
	const button = collapsible.children[0];
	button.addEventListener('click', (ev) => {
		const content = collapsible.children[1];
		if(content.style.maxHeight){
			content.style.maxHeight = null
		} else {
			content.style.maxHeight = content.scrollHeight + 200 + 'px'
		}
	})
}


$(document).ready(function(){
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next'),
	})
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
	})
	$('.slider-nav').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		centerPadding: '0px',
		asNavFor: '.slider-for',
	})
})
